const router = require("express").Router();

// all your routes here
router.post("/movies", async (req, res) => {
  try {
    const newMovie = await Movie.create({
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot,
      cast: req.body.cast,
    });
    res.json({ newMovie });
  } catch (error) {
    console.log(error.message);
    res.sendStatus(400);
  }
});

router.get("/movies", async (req, res) => {
  try {
    const allMovies = await Movie.find();
    res.json({ allMovies });
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
});
router.get("/movies/:id", async (req, res) => {
  try {
    const reqMovie = await Movie.findById(req.params.id)
      .populate("cast")
      .then((movie) => res.json({ reqMovie }));
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
});

router.delete("/movies/:id", async (req, res) => {
  try {
    await Movie.findByIdAndRemove(req.params.id).then(() =>
      res.sendStatus(204)
    );
    throw "Please provide a valid ID.";
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
});

router.post("/movies/:id", async (req, res, next) => {
  try {
    const newMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).then((newMovie) => res.status(200).json({ newMovie }));
    throw "Please provide a valid ID.";
  } catch (error) {
    console.log(error.message);
    res.sendStatus(400);
  }
  console.log(error);
  res.sendStatus(404);
});

module.exports = router;
