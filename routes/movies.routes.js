const app = require("../app");

const router = require("express").Router();
const Movie = require("../models/Movie.model");
module.exports = router;

router.post("/movies", async (req, res, next) => {
  try {
    const newMovie = req.body;
    const createdMovie = await Movie.create({
      title: newMovie.title,
      genre: newMovie.genre,
      plot: newMovie.plot,
      cast: newMovie.cast,
    });

    res.status(201).json({ movie: createdMovie });
  } catch (error) {
    res.status(400).json({ message: "400 BAD REQUEST" });
    next(error);
  }
});

router.get("/movies", async (req, res, next) => {
  try {
    const foundMovie = await Movie.find();

    res.status(302).json({ movie: foundMovie });
  } catch (error) {
    res.status(500).json({ message: "500 INTERNAL SERVER ERROR" });
    next(error);
  }
});

router.get("/movies/:id", async (req, res, next) => {
  try {
    const movieId = await Movie.findById(req.params.id);
    res.json({ movie: movieId });
  } catch (error) {
    res.json({ message: "500 INTERNAL SERVER ERROR" });
    next(error);
  }
});

router.delete("/movies/:id/delete", async (req, res, next) => {
  try {
    const deleteMovie = req.body;
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.json({ message: "500 INTERNAL SERVER ERROR" });
    next(error);
  }
});

router.patch("/movies/:id", async (req, res, next) => {
  try {
    const updateMovie = req.body;
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, updateMovie, { new: true });
    res.status(200).json({ movie: updatedMovie });
  } catch (error) {
    res.json({ message: "400 BAD REQUEST" });
    next(error);
  }
});
