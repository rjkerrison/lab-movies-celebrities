// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/celebrity.model.js");

// all your routes here
router.post("/create", async (req, res, next) => {
  // http://localhost:3000/celebrities/create
  try {
    const celebrityToCreate = req.body;
    const celebrity = await Celebrity.create(celebrityToCreate);
    res
      .status(201)
      .json({ message: "Success, you have created a celebrity", celebrity });
  } catch (error) {
    res.sendStatus(400);
  }
});

router.get("/", async (req, res, next) => {
  // http://localhost:3000/celebrities/
  try {
    const allCelebrities = await Celebrity.find();
    res.status(200).json(allCelebrities);
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;
