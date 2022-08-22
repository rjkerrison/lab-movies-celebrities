// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router(),
  mongoose = require("mongoose"),
  Celebrity = require("../models/Celebrity.model");

router.post("/", async (req, res) => {
  try {
    const celebrity = await Celebrity.create(req.body);

    return res.status(201).json(celebrity);
  } catch (error) {
    res.status(400).json("Bad request");
  }
});

router.get("/", async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();
    res.json(celebrities);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
