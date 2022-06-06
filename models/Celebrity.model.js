//  Add your code here
const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

const celebrities = [
  { name: "celeb1", occupation: "art", catchPhrase: "one phrase" },
  { name: "celeb2", occupation: "musician", catchPhrase: "nothing to say" },
];

const createdCelebs = await Celebrity.create(celebrities);

const Celebrity = model("Celebrity", celebritySchema);

module.exports = Celebrity;
