
const express = require('express')
const app= express()

//importing importing post module
const post = require ('./src/posts/post.model')

//
app.get('/', function(req,res){
    // responding with the data that has been 
    return res.json(req)
})

app.get('/', function(req,res){
    // responding with the data from post
    return res.json([post])
})


app.listen(3000,function{
    console.log('Malawi')
})


