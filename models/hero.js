const { Schema } = require('mongoose')


const heroSchema = new Schema(
    {
        known_as: {type: String},
        full_name: {type: String},
        height: {type: Number},
        weight: {type: Number},
        good: {type: Boolean},
        affiliation: { type: Schema.Types.ObjectId, ref: 'Affiliation' },
        villain: { type: Schema.Types.ObjectId, ref: 'Villain' },
        img:{type: String}
    },
    {timestamps: true,}
)

module.exports = heroSchema