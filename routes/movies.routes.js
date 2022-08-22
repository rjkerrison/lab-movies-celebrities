const app = require("../app");
const router = require("express").Router(); // give me the router
const Movie = require("../models/Movie.model.js");

// POST

router.post("/movies/", async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(400).json({ message: "400 BAD REQUEST" });
    next(error); // tous les problemes vont jusqu au error handling
  }
});

// GET
// listing movies

router.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(302).json({ movie: movies });
  } catch (error) {
    res.status(500).json({ message: "500 INTERNAL SERVER ERROR" });
  }
});

//iteration 8

router.get("/movies/:id", async (req, res) => {
  try {
    const movies = await Movie.findById(req.params.id).populate("cast");
    res.status(302).json(movies);
  } catch (error) {
    res.status(500).json({ message: "500 INTERNAL SERVER ERROR" });
  }
});

//iteration 9

router.delete("/movies/:id", async (req, res) => {
  try {
    await Movie.findByIdAndRemove(req.params.id);
    res.status(204).json({ message: "204 NO CONTENT" });
  } catch (error) {
    next(error);
  }
});

//iteration 10
router.patch("/movies/:id", async (req, res) => {
  try {
    const newMovie = req.body;
    const movie = await Movie.findByIdAndUpdate(req.params.id, newMovie, {
      new: true,
    });
    res.status(200).json(movie);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
