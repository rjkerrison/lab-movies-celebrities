// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

router.post("/celebrities", async (req, res, next) => {
  try {
    const newCelebrity = req.body;
    const celebrityAdded = await Celebrity.create(newCelebrity);
    res.status(201).json(celebrityAdded);
  } catch (error) {
    next(error);
  }
});

router.get("/celebrities", async (req, res, next) => {
  try {
    const allCelebrities = await Celebrity.find();
    res.status(201).json(allCelebrities);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
