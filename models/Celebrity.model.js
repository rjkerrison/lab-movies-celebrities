//  Add your code here
const { Schema, model } = require("mongoose");

const celebritySchema = new Schema( {
    name: Schema.Types.String,
    occupation: Schema.Types.String,
    catchPhrase: Schema.Types.String,
});

const Celebrity = model("Celebrity", celebritySchema);
module.exports = Celebrity;
