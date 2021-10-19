const mongoose = require('mongoose');
const DB = process.env.DATABASE;

mongoose.connect(DB, {
    userNewUrlParser: true,
    userCreateIndex : true,
    userUnififedTopology: true,
    userFindAndModify:falselse
}).then(() =>{
    console.log('connection successful');
}).catch((err) => console.log('no connection'));