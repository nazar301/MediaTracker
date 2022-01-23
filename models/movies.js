const mongoose = require('../db/connections')

const movieSchema = new mongoose.Schema({
    name: {type: String, required: true},
    genre: { type: String, required: true},
    rating: {type: Number, required: true , range: [1,10]}
    
})

const Movie = mongoose.model('movie', movieSchema)

module.exports = Movie