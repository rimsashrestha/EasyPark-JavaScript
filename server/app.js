const dotenv = require('dotenv');
const express = require('express');
const app = express ();
const mongoose = require('mongoose');

dotenv.config({path: './config.env'});
require('./db/conn');
const User =require('./model/userSchema');

const DB = process.env.DATABASE;
const PORT  = process.env.PORT
mongoose.connect(DB, {
    userNewUrlParser: true,
    userCreateIndex : true,
    userUnififedTopology: true,
    userFindAndModify:falselse
}).then(() =>{
    console.log('connection successful');
}).catch((err) => console.log('no connection'));

// Middleware

const middleware = (req,res,next)  =>{
        console.log ('hello my middleware');
}

middleware();

app.get('/' ,(req , res) => {
    res.send('Hello World from the Server');
    next();
})

app.get('/about' ,middleware, (req , res) => {
    res.send('Hello About World from the Server');
})

app.get('/contact' ,middleware, (req , res) => {
    res.send('Hello Contact World from the Server');
})

app.get('/home' ,middleware, (req , res) => {
    res.send('Hello HOme World from the Server');
})

app.get('/guest' ,middleware, (req , res) => {
    res.send('Hello guest World from the Server');
})

app.get('/account ' ,middleware, (req , res) => {
    res.send('Hello account World from the Server');
})

app.listen (3000,() => {
    console.log('server is runnin on ${PORT}');

})

