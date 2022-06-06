module.exports = (app) => {
  app.use((req, res, next) => {
    // this middleware runs whenever requested page is not available
    res.status(404).render("not-found");
  });

  app.use((err, req, res, next) => {
    // whenever you call next(err), this middleware will handle the error
    // always logs the error
    console.error("ERROR", req.method, req.path, err);

    // sends the appropriate error message
    const errors = [];

    if (!err.errors) {
      err.errors = [err];
    }

    for (let e in err.errors) {
      e = err.errors[e];

      switch (e.kind) {
        case `ObjectId`:
          errors.push(`No such ${req.documentInfo.model} with id: ${req.documentInfo.id}`);
          break;
        case `required`:
          errors.push(`${e.path} is required`);
          break;
        case `enum`:
          errors.push(`${e.value} is not a valid ${e.path}. Please choose one of the following: ${e.properties.enumValues.join(`; `)}`);
          break;
        default:
          errors.push(`${e.stringValue} is not a valid ${e.path}`);
      }
    }

    res.status(400).json({ errors });

    // only render if the error ocurred before sending the response
    if (!res.headersSent) {
      res.status(500).render("error");
    }
  });
};
