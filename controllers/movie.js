const express = require('express')
const router = express.Router()
const Movie = require('../models/movies')



router.get('/', (req, res)=> {
    Movie.find({}, (err, movies) => {
        res.render('index',{movies})
      
    })
})


router.get('/new', (req,res) =>{
    res.render('new')
})

router.get('/:id', (req, res)=> {
    Movie.findById(req.params.id, (err, movie)=>{
        res.render('show', { movie })
    })
})

router.post('/', (req, res) =>{
   
    Movie.create(req.body, (err, createdMovie) =>{
        res.redirect('/movies')
    } )
  
})

router.delete('/:id', (req,res)=>{
    Movie.findByIdAndRemove(req.params.id, (err, deletedMovie)=>{
        res.redirect('/movies')
    })
})

router.put('/:id', (req, res) =>{
   
       
    Movie.findByIdAndUpdate(req.params.id, req.body,{new: true} ,(err, updatedModel) => {
        console.log(updatedModel)
        
        res.render('edit', {movie: updatedModel})
    } )
  
})

router.get('/:id/edit', (req,res) => {
    Movie.findById(req.params.id, (err, movie)=>{
        res.render('edit', { movie })
    })
})


module.exports = router