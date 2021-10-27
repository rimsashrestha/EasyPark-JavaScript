const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require('cors');
const guestRouter = require('./router/guestRouter')
const contact_usRouter = require('./router/contact_usRouter')

dotenv.config({ path: "./config.env" });

require("./db/conn");

app.use(express.json());

const User = require("./model/userSchema");
const Authenticate = require("./middleware/authenticate");

app.use(cors());
app.use(require('./router/auth'));

const PORT = process.env.PORT;



var collection;
app.get('/search', async (req, res) => {
    try{
        let result = await collection.aggregate([
            {
              $search: {
                index: 'searchLocations',
                text: {
                  query: '{"location" : {$eq = "Indiana"}}',
                  path: {
                    'wildcard': '*'
                  }
                }
              }
            }
          ]).toArray();
        res.send(result);
    }catch (err){
        res.status(500).send({ message : err.message});
    }
});

app.get("/about",Authenticate, (req, res) => {
  console.log(`Hello my About`);
  res.send(`Hello About world from the server`);
});



app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
