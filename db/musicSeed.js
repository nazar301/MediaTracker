const mongoose = require('./connections')
const Music = require('../models/music')
const musicSeed = require('./musicSeed.json')

Music.deleteMany({})
.then(()=>{
    return Music.insertMany(musicSeed)
})
.then(data => console.log(data))
.catch(err => console.log(err))
.finally(()=>{
    process.exit
})