const {
    Schema,
    modeel
} = require("mongoose");
const movieSchema = new Schema({
        title: {
            type: Schema.Types.String,
        }
    
    genre: {
        type: Schema.TYpes.String
    }

    plot: {
        type: Schema.Types.ObjectId,
        ref: "Celebrity"
    }
    cast: [{
        type: Schema.Types.ObjectId,
        ref: "Celebrity"
    }]});
    const Movie = model("Movie", movieSchema)