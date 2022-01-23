const express = require('express')
const router = express.Router()
const Shows = require('../models/shows')



router.get('/', (req, res)=> {
    Shows.find({}, (err, shows) => {
        res.render('showIndex',{shows})
      
    })
})


router.get('/new', (req,res) =>{
    res.render('showNew')
})

router.get('/:id', (req, res)=> {
    Shows.findById(req.params.id, (err, shows)=>{
        res.render('showDisplay', { shows })
    })
})

router.post('/', (req, res) =>{
    
    Shows.create(req.body, (err, createdShow) =>{
        res.redirect('/shows')
    } )
  
})

router.delete('/:id', (req,res)=>{
    Shows.findByIdAndRemove(req.params.id, (err, deletedShow)=>{
        res.redirect('/shows')
    })
})

router.put('/:id', (req, res) =>{
   
       
    Shows.findByIdAndUpdate(req.params.id, req.body,{new: true} ,(err, updatedModel) => {
        console.log(updatedModel)
        
        res.render('showEdit', {shows: updatedModel})
    } )
  
})

router.get('/:id/edit', (req,res) => {
    Shows.findById(req.params.id, (err, shows)=>{
        res.render('showEdit', { shows })
    })
})


module.exports = router