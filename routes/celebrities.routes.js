// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model.js");
const express = require("express");

// all your routes here
router.post("/", async (req, res, next) => {
  try {
    const addCelebrity = await Celebrity.create(req.body);
    res.status(201).json({ message: `New celebrity created`, addCelebrity });
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allCelebrities = await Celebrity.find();
    res.status(200).json(allCelebrities);
  } catch (err) {
    next(500);
  }
});

module.exports = router;
