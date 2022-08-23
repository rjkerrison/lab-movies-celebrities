const { Schema, model } = require('mongoose');

const celebritySchema = new Schema({
  name: {
    type: String,
    required: [true, 'Your celebrity needs a name.']
  },
  occupation:  {
    type: String,
    required: [true, 'Your celebrity needs an occupation.']
  },
  catchPhrase:  {
    type: String,
    required: [true, 'Please include a catchphrase for your celebrity.']
  }
});

const Celebrity = model('Celebrity', celebritySchema);
module.exports = Celebrity;
