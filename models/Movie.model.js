const { Schema, model, SchemaType } = require("mongoose");

const movieSchema = new Schema({
    title: Schema.Types.String,
    genre: Schema.Types.String,
    plot: Schema.Types.String,
    cast: {
        type: [Schema.Types.ObjectId],
        ref: 'Celebrity'
    }
});

const Movie = model('Movie', movieSchema);
module.exports = Movie;