// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model.js");

// all your routes here

router.get("/", async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();
    console.log("celebrities");
    console.log(celebrities);

    res.status(200).json(celebrities);
  } catch (err) {
    console.error(err);
    next();
  }
});

router.post("/", async (req, res, next) => {
  try {
    let { name, occupation, catchPhrase } = req.body;

    if (!name || !occupation || !catchPhrase) {
      console.log(`Missing fields`);
      return next(400);
    } else if (
      typeof name != "string" ||
      typeof occupation != "string" ||
      typeof catchPhrase != "string"
    ) {
      console.log(`Wrong field type`);
      return next(400);
    }
    {
      const celebrityToCreate = req.body;
      const celebrity = await Celebrity.create(celebrityToCreate);

      res.status(201).json(celebrity);
    }
  } catch (err) {
    console.error(err);
    next();
  }
});

module.exports = router;
