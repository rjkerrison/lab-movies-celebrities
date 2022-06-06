const router = require('express').Router(),
  mongoose = require(`mongoose`),
  { isValidObjectId } = mongoose,
  Movie = require(`../models/Movie.model`),
  Celebrity = require(`../models/Celebrity.model`);

router.get('/', async (req, res, next) => {
  try {
    const movies = await Movie.find();

    return res.status(200).json(movies);
  } catch (error) {
    next(error);
  }
});

router.post('/create', async (req, res, next) => {
  try {
    const movie = req.body;

    if (movie.cast) {
      const celebsMaybe = await Promise.all(getCelebPromises(movie.cast));
      movie.cast = celebsMaybe.filter(celebrity => celebrity)
        .map(celebrity => celebrity.id);
    }

    const createdMovie = await Movie.create(movie);

    return res.status(201).json(createdMovie);
  } catch (error) {
    next(error);
  }
});

router.route(`/:id`)
  .all(async (req, res, next) => {
    try {
      req.documentInfo = {
        id: req.params.id,
        model: `movie`
      };

      const movie = await Movie.findById(req.documentInfo.id);

      if (!movie) {
        const err = new Error();

        err.kind = `ObjectId`;
        throw err;
      }

      next();
    } catch (error) {
      next(error);
    }
  })

  .get(async (req, res, next) => {
    try {
      const movie = await Movie.findById(req.documentInfo.id).populate(`cast`);

      return res.status(200).json(movie);
    } catch (error) {
      next(error);
    }
  })

  .delete(async (req, res, next) => {
    try {
      await Movie.findByIdAndRemove(req.documentInfo.id);

      return res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  })

  .post(async (req, res, next) => {
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(req.documentInfo.id, req.body, { new: true });

      return res.status(200).json(updatedMovie);
    } catch (error) {
      next(error);
    }
  })



function getCelebPromises(celebsArray) {
  const celebPromises = [];

  celebsArray.forEach(celebrity => {
    let foundCelebrity;

    if (isValidObjectId(celebrity)) {
      foundCelebrity = celebPromises.push(Celebrity.findById(celebrity));
    } else {
      foundCelebrity = celebPromises.push(Celebrity.findOne({ name: celebrity }));
    }
  });

  return celebPromises;
}


module.exports = router;