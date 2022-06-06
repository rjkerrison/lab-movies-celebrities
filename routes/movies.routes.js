// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movie.model");

// all your routes here

router.post("/movies/create", async (req, res, next) => {
  try {
    const newMovie = await req.body;
    const createdMovie = await Movie.create(newMovie);
    res.status(201).json(createdMovie);
    res.status(201).send("Successfuly created new movie");
  } catch (error) {
    res
      .status(400)
      .send(
        "Please enter a valid movie format with title, genre, plot and cast"
      );
  }
});

router.get("/movies", async (req, res, next) => {
  try {
    const foundMovies = await Movie.find();
    res.json(foundMovies);
  } catch (error) {
    res.status(500).send("Internal error");
  }
});

module.exports = router;
