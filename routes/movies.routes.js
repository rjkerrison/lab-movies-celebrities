// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movie.model");

router.post("/movies", async (req, res, next) => {
  try {
    const movie = await req.body;
    const newMovie = await Movie.create(movie);
    res.status(201).json(newMovie).send("new movie created !");
  } catch (error) {
    res.status(400).send("movie format not valid");
  }
});

router.get("/movies", async (req, res, next) => {
  try {
    const allMovies = await Movie.find();
    res.status(200).json(allMovies);
  } catch (error) {
    res.status(500).send("internal error");
  }
});

router.get("/movies/:id", async (req, res) => {
  try {
    const newMovieId = req.params.id;
    const movie = await Movie.findById(newMovieId).populate("cast", "-_id");
    res.status(200).json(movie);
  } catch (error) {}
});

router.delete("/movies/:id", async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.sendStatus(204).send("Movie deleted");
  } catch (error) {
    res.sendStatus(400);
  }
});

module.exports = router;
