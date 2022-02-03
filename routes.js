var express = require('express');
var router = express.Router();
var Movie = require('./Models/book')


//to fetch movies
router.get('/books',async(req,res)=>{
    const imovie = await Movie.find()
    res.send(imovie)
})

//to add the movies
router.post("/books",async(req,res)=>{
    const imovie = new Movie({
        name:req.body.name,
        like:req.body.like
    })

    await imovie.save((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                message:msg
            })
        }
    })

})














module.exports = router 