const mongoose = require('../db/connections')

const musicSchema = new mongoose.Schema({
    name: {type: String, required: true},
    artist: { type: String, required: true},
    rating: {type: Number, required: true , range: [1,10]}
    
})

const Music = mongoose.model('music', musicSchema)

module.exports = Music