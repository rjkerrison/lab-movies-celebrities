//  Add your code here
const mongoose = require("mongoose");

const celebritySchema = new mongoose.Schema({
  name: String,
  occupation: String,
  catchphrase: String,
});

const Celebrity = new mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;
