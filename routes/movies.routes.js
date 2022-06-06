// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movies.model.js");

// all your routes here
router.post("/", async (req, res, next) => {
  try {
    const addMovie = await Movie.create(req.body);
    res.status(201).json({ message: `New movie created`, addMovie });
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allMovies = await Movie.find();
    res.status(200).json(allMovies);
  } catch (err) {
    next(500);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const movieInfo = await Movie.findById(id).populate("cast", "-_id");
    res.status(200).json(movieInfo);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteMovie = await Movie.findByIdAndDelete(id);
    res.status(204).json({ message: `Movie deleted`, deleteMovie });
  } catch (err) {
    next(400);
  }
});

router.post("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedMovie);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
