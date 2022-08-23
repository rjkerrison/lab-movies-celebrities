//  Add your code here
const {
    Schema,
    model
} = require('mongoose')

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const celebritiesSchema = new Schema({
        name: {
            type: Schema.Types.String,
            required: true
        },
        occupation: {
            type: Schema.Types.String,
        },
        catchPhrase: {
            type: Schema.Types.String,
        },

    },

)

const celebrities = model('Celebrities', celebritiesSchema)

module.exports = celebrities