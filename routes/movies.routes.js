// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Movie = require("../models/Movie.model");

// POST REQUEST - Add a movie to the database.
router.post("/create", async (req, res, next) => {
  try {
    const movieToAdd = req.body;
    const MovieAdded = await Movie.create(movieToAdd);
    res.status(201).json(MovieAdded);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

// GET REQUEST - Get all movies from the database.
router.get("/", async (req, res, next) => {
  try {
    const allMovies = await Movie.find();

    res.status(201).json(allMovies);
  } catch (err) {
    next(err);
  }
});

// GET REQUEST - Get details from one movie
router.get("/:id", async (req, res, next) => {
  try {
    const oneMovie = await Movie.findById(req.params.id).populate("cast");

    res.status(201).json(oneMovie);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const removeMovie = await Movie.findByIdAndRemove(req.params.id);
    console.log(removeMovie);
    res.json({ message: "DELETED"})
  } catch (err) {
    next(err);
  }
});

module.exports = router;

// UPDATE MOVIE - Add a movie to the database.
router.post("/:id", async (req, res, next) => {
    try {
      const movieToUpdate = req.params.id;
      const MovieUpdated = await Movie.findByIdAndUpdate(movieToUpdate, req.body, {new: true});
      res.status(200).json(MovieUpdated);
    } catch (err) {
      next(err);
    }
  });