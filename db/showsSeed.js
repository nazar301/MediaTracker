const mongoose = require('./connections')
const Show = require('../models/shows')
const showSeed = require('./showSeed.json')

Show.deleteMany({})
.then(()=>{
    return Show.insertMany(showSeed)
})
.then(data => console.log(data))
.catch(err => console.log(err))
.finally(()=>{
    process.exit
})