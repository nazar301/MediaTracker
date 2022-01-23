const mongoose = require('../db/connections')

const showSchema = new mongoose.Schema({
    name: {type: String, required: true},
    genre: { type: String, required: true},
    rating: {type: Number, required: true , range: [1,10]}
    
})

const Show = mongoose.model('show', showSchema)

module.exports = Show