// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here
router.post("/celebrities/create", async (req, res, next) => {
  try {
    const newCelebrity = await req.body;
    const createdCelebrity = Celebrity.createOne(newCelebrity);
    res.status(201).body = createdCelebrity;
    res.status(201).send("Successfuly created new celebrity");
  } catch (error) {
    res
      .status(400)
      .send(
        "Please enter a valid celebrity format with name, occupation and catchphrase"
      );
  }
});

module.exports = router;
