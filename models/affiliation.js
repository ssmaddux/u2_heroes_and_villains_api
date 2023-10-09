const { Schema } = require('mongoose')


const affiliationSchema = new Schema(
    {
        team: {type: String},
        good: {type: Boolean},
    },
    {timestamps: true,}
)

module.exports = affiliationSchema