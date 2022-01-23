const express = require('express')
const router = express.Router()
const Music = require('../models/music')



router.get('/', (req, res)=> {
    Music.find({}, (err, music) => {
        res.render('musicIndex',{music})
      
    })
})


router.get('/new', (req,res) =>{
    res.render('musicNew')
})

router.get('/:id', (req, res)=> {
    Music.findById(req.params.id, (err, music)=>{
        res.render('musicDisplay', { music })
    })
})

router.post('/', (req, res) =>{
 
    
    Music.create(req.body, (err, createdMusic) =>{
        res.redirect('/music')
    } )
  
})

router.delete('/:id', (req,res)=>{
    Music.findByIdAndRemove(req.params.id, (err, deletedMusic)=>{
        res.redirect('/music')
    })
})

router.put('/:id', (req, res) =>{
   
       
    Music.findByIdAndUpdate(req.params.id, req.body,{new: true} ,(err, updatedModel) => {
        console.log(updatedModel)
        
        res.render('musicEdit', {music: updatedModel})
    } )
  
})

router.get('/:id/edit', (req,res) => {
    Music.findById(req.params.id, (err, music)=>{
        res.render('musicEdit', { music })
    })
})


module.exports = router