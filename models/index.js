const mongoose = require('mongoose')
const affiliationSchema = require('./affiliation')
const villainSchema = require('./villain')
const heroSchema = require('./hero')


//naming the collection 
const Affiliation = mongoose.model('Affiliation', affiliationSchema)
const Villain = mongoose.model('Villain', villainSchema)
const Hero = mongoose.model('Hero', heroSchema)


module.exports = {
    Affiliation,
    Villain,
    Hero
}