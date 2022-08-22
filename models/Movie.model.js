const { Schema, model } = require("mongoose");

// define the schema
const movieSchema = new Schema({
  title: {
    type: Schema.Types.String,
  },
  genre: {
    type: Schema.Types.String,
  },
  plot: {
    type: Schema.Types.String,
  },
  cast: [
    {
      type: Schema.Types.ObjectId,
      ref: "Celebrity",
    },
  ],
});

// declare the model
const Movie = model("Movie", movieSchema);

// export the model
module.exports = Movie;
