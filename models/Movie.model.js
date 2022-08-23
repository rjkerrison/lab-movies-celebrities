const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Your movie needs a title.']
  },
  genre: {
    type: String,
    required: [true, 'Your movie needs a genre.']
  },
  plot: {
    type: String,
    required: [true, 'Please include a plot.']
  },
  cast: {
    type: [Schema.Types.ObjectId],
    ref: 'Celebrity',
    required: [true, 'Please include a cast.']
  }
});

const Movie = model('Movie', movieSchema);
module.exports = Movie;
