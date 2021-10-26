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
app.use(require("./router/auth"));
app.use(cors());


const PORT = process.env.PORT;



app.get('/', (req, res) => {
 res.send(`Hello world from the server app.js`);
});



app.use('/guest', guestRouter)
app.use('/contact_us', contact_usRouter)

app.get("/about",Authenticate, (req, res) => {
  console.log(`Hello my About`);
  res.send(`Hello About world from the server`);
});



app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
