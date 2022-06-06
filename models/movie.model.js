//  Add your code here

const { Schema, SchemaTypes, model } = require("mongoose");
const celebrity = require("./celebrity.model");

const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  cast: { type: [SchemaTypes.ObjectId], ref: celebrity },
});

const Movie = model("Movie", movieSchema);

module.exports = Movie;
