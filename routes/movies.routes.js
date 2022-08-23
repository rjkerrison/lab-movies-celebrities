const router = require('express').Router();
const Movie = require('../models/Movie.model.js');
const Celebrity = require('../models/Celebrity.model.js');

// Create new movie
router.post('/movies', async (req, res) => {
  try {
    const newMovie = await Movie.create({
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot,
      cast: req.body.cast,
    });
    res.json({ newMovie });
  } catch (error){
    console.log(error.message);
    res.sendStatus(400);
  }
});

// Get all movies
router.get('/movies', async (req, res) => {
    try {
    const allMovies = await Movie.find();
    res.json({ allMovies });
  } catch (error){
    console.log(error.message);
    res.sendStatus(500);
  }
});

// Get details from movie
router.get('/movies/:id', async (req, res) => {
  Movie.countDocuments({_id: req.params.id}, async (err, count) => { 
    try {
      if (count > 0){
	const reqMovie = await Movie.findById(req.params.id).populate('cast')
	      .then(movie => res.json({ reqMovie }));
      }
      else
	throw ('Please provide a valid ID.');
    } catch (error){
      console.log(error);
      res.sendStatus(404);
    }
  });
});

// Delete movie
router.delete('/movies/:id', (req, res) => {
  Movie.countDocuments({_id: req.params.id}, async function (err, count){
    try {
      if(count > 0){
	await Movie.findByIdAndRemove(req.params.id)
	  .then (() => res.sendStatus(204));
      }
      else
	throw ('Please provide a valid ID.');
    } catch (error) {
      console.log(error);
      res.sendStatus(404);
    }
  });
});


router.post('/movies/:id', (req, res, next) => {
  Movie.countDocuments({_id: req.params.id}, async function (err, count){ 
    try {
      if(count > 0){
	const newMovie = await Movie.findByIdAndUpdate(req.params.id,
						       req.body, { new: true })
	      .then((newMovie) => res.status(200).json({ newMovie }));
      }
      else
	throw ('Please provide a valid ID.');
    } catch (error) {
      if (error.name === 'CastError'){
	console.log(error.message);
	res.sendStatus(400);
      }
      else {
	console.log(error);
	res.sendStatus(404);
      }
    }
  });
});


module.exports = router;