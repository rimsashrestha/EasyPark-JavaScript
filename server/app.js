const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const guestRouter = require('./router/guestRouter')
const contact_usRouter = require('./router/contact_usRouter')



dotenv.config({ path: './config.env' });

require('./db/conn');

app.use(express.json());
app.use(cors());
const User = require('./model/userSchema');
app.use(require('./router/auth'));

const PORT = process.env.PORT;


// Middelware 
const middleware = (req,res, next) => {
    console.log(`Hello my Middleware`);
    next();
}


app.use('/guest', guestRouter)
app.use('/contact_us', contact_usRouter)


app.get('/about', middleware, (req, res) => {
    console.log(`Hello my About`);
    res.send(`Hello About world from the server`);
});

app.get('/contact', (req, res) => {
    //res.cookie("TEST", 'SHRESTHA' );
    res.send(`Hello Contact world from the server`);
});

app.get('/signin', (req, res) => {
    res.send(`Hello Login world from the server`);
});

app.get('/signup', (req, res) => {
    res.send(`Hello Registration world from the server`);
});

app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);
})


