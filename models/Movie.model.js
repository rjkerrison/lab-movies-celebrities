const { Schema, SchemaTypes, model } = require("mongoose");

const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  cast: [{ type: SchemaTypes.ObjectId, ref: "Celebrity" }],
});

const Movie = model("Movie", movieSchema);

module.exports = Movie;
