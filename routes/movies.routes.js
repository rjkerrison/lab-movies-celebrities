// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/movie.model.js");

// all your routes here
// CREATE a new movie
router.post("/create", async (req, res, next) => {
  // http://localhost:3000/movies/create
  try {
    const movieToCreate = req.body;
    const movie = await Movie.create(movieToCreate);
    res
      .status(201)
      .json({ message: "Success, you have created a movie", movie });
  } catch (error) {
    res.sendStatus(400);
  }
});

// GET all the movies
router.get("/", async (req, res, next) => {
  // http://localhost:3000/movies/
  try {
    const allMovies = await Movie.find();
    res.status(200).json(allMovies);
  } catch (error) {
    res.sendStatus(500);
  }
});

// GET one particular movie
router.get("/:id", async (req, res, next) => {
  // http://localhost:3000/movies/id
  try {
    const id = req.params.id;
    const myMovie = await Movie.findById(id).populate('cast')
    res.status(200).json(myMovie);
  } catch (error) {
    res.sendStatus(500);
  }
});

// DELETE one particular movie
router.delete("/:id", async (req, res, next) => {
  // http://localhost:3000/movies/id
  try {
    const id = req.params.id;
    await Movie.findByIdAndRemove(id)
    res.sendStatus(204)
  } catch (error) {
    res.json(error)
  }
});

// UPDATE one particular movie
router.post("/:id", async (req, res, next) => {
  // http://localhost:3000/movies/id
  try {
    const id = req.params.id;
    const myUpdate = req.body
    const myUpdatedMovie = await Movie.findByIdAndUpdate(id, myUpdate, {new: true})
    res.status(200).json(myUpdatedMovie);
  } catch (error) {
    res.json(error)
  }
});

module.exports = router;
