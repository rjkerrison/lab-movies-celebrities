const { Schema, SchemaTypes, model } = require("mongoose");

const celebritySchema = new Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String,
  },
  {
    timestamp: true,
  }
);

const Celebrity = model("Celebrity", celebritySchema);

module.exports = Celebrity;
