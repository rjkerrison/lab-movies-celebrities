// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const { SchemaTypes } = require("mongoose");
const Celebrity = require("../models/Celebrity.model.js");
const Movie = require("../models/Movie.model.js");

// all your routes here
router.get("/", async (req, res, next) => {
  try {
    const movies = await Movie.find();
    console.log("movies");
    console.log(movies);

    res.status(200).json(movies);
  } catch (err) {
    console.error(err);
    next();
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const movieDetails = await Movie.findById(req.params.id).populate("cast");
    console.log("movies");
    console.log(movieDetails);

    res.status(200).json(movieDetails);
  } catch (err) {
    console.error(err);
    next();
  }
});

router.post("/", async (req, res, next) => {
  try {
    let { title, genre, plot, cast } = req.body;

    if (!title || !genre || !plot || !cast) {
      console.log(`Missing fields`);
      return next(400);
    } else if (
      typeof title != "string" ||
      typeof genre != "string" ||
      typeof plot != "string"
    ) {
      console.log(`Wrong field type`);
      return next(400);
    }
    {
      const movieToCreate = req.body;
      const movie = await Movie.create(movieToCreate);

      res.status(201).json(movie);
    }
  } catch (err) {
    console.error(err);
    next();
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedMovie);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.status(204).json;
});

module.exports = router;
