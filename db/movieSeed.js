const mongoose = require('./connections')
const Movie = require('../models/movies')
const movieSeed = require('./movieSeed.json')


Movie.deleteMany({})
.then (()=>{
    return Movie.insertMany(movieSeed)
})
.then(data => console.log(data))
.catch(err=>console.log(err))
.finally(()=>{
    process.exit
})

