// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router(),
  mongoose = require("mongoose"),
  Movie = require("../models/Movie.model");

router.post("/", async (req, res, next) => {
  try {
    const movie = req.body;
    const createdMovie = await Movie.create(movie);
    res.status(201).json(createdMovie);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id).populate("cast");
    res.json(movie);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deleteMovie = await Movie.findByIdAndRemove(req.params.id);
    res.status(204).json({ message: "No Content" });
  } catch (error) {
    next(error);
  }
});

router.post("/:id", async(req, res, next) => {
    try {
      const updateMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true});
      res.status(200).json(updateMovie);
    } catch (error) {
      next(error);
    }
  });
module.exports = router;
