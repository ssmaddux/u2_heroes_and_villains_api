const { Schema } = require('mongoose')


const villainSchema = new Schema(
    {
        known_as: {type: String},
        full_name: {type: String},
        height: {type: Number},
        weight: {type: Number},
        good: {type: Boolean},
        affiliation: { type: Schema.Types.ObjectId, ref: 'Affiliation' },
        img:{type: String}
    },
    {timestamps: true,}
)

module.exports = villainSchema