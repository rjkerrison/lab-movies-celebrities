const { Schema, model } = require(`mongoose`);

const celebritySchema = new Schema({
  name: {
    type: Schema.Types.String,
  },
  occupation: {
    type: Schema.Types.String,
    enum: ["actor", "singer", "comedian", "unknown"],
  },
  catchPhrase: {
    type: Schema.Types.String,
  },
});

const Celebrity = model("Celebrity", celebritySchema);

module.exports = Celebrity;
