const { Schema, SchemaTypes, model } = require("mongoose");

const moviesSchema = new Schema({
  title: SchemaTypes.String,
  genre: SchemaTypes.String,
  plot: SchemaTypes.String,
  cast: [{ type: SchemaTypes.ObjectId, ref: "Celebrity" }],
});

const Movie = model("Movie", moviesSchema);

module.exports = Movie;
