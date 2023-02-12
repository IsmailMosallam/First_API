const express = require('express')
const mongoose = require('mongoose')
const usePost = require('./routes/post')
const Post = require('./model/post')
const bodyparser = require('body-parser');
const app = express();
// middleware 
app.use(bodyparser.json())
app.use('/post', usePost)

//  connect To BD
mongoose.connect('mongodb://localhost:27017/testDB', () => {

        console.log("connected To DB")
    })
    // server
app.listen(3000, () => {
    console.log('start server 300...! ')
})