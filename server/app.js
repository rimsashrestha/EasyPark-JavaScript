const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require('cors');
const guestRouter = require('./router/guestRouter')
const contact_usRouter = require('./router/contact_usRouter')
const { MongoClient } = require('mongodb')
const parkingLoc = require('./model/parkingsSchema')
const ParkingsRouter = require('./router/parkingsRoute')
// var locations = parkingLoc.find({})


dotenv.config({ path: "./config.env" });

require("./db/conn");

app.use(express.json());

const User = require("./model/userSchema");
const Authenticate = require("./middleware/authenticate");

app.use(cors());
app.use(require('./router/auth'));

const PORT = process.env.PORT;

app.use('/guest', guestRouter)
app.use('/contact_us', contact_usRouter);
app.use('/search', ParkingsRouter);
var collection;
const client = new MongoClient("mongodb+srv://easypark:easypark@cluster0.hikxz.mongodb.net/easypark?retryWrites=true&w=majority")

// app.get('/search', async (req, res) => {

  // collection.find(rreq.query.term).toArray(function(err, result){
  //   if (err) throw err;
  //   console.log(result);
  // })

  // var regex = new RegExp(req.query["term"], 'i')
  // var locationFinder = parkingLoc.find({location:regex},{'location':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(5);
  // locationFinder.exec(function (err,data){
  //   // console.log(data)
  //   var result = []
  //   if(!err){
  //     if(data&& data.length && data.length >0){
  //       console.log(data)
  //       data.forEach(parkings =>{
  //         //if(parkings.location.includes())
          
  //         let obj = {
  //           id:parkings._id,
  //           location: parkings.location,
  //           numbers: parkings.numbers
  //         }
  //         result.push(obj);
  //       })
  //     }
  //     res.jsonp(result);
  //   }
  // })  

    // try{
    //     let result = await collection.aggregate([
    //         {
    //           $search: {
    //             index: 'searchLocations',
    //             text: {
    //               query: `${req.query.term}`,
    //               path: {
    //                 'wildcard': '*'
    //               }
    //             }
    //           }
    //         }
    //       ]).toArray();
    //     res.send(result);
    // }catch (err){
    //     res.status(500).send({ message : err.message});
    // }
// });

app.get("/about",Authenticate, (req, res) => {
  console.log(`Hello my About`);
  res.send(`Hello About world from the server`);
});



app.listen(PORT,  () => {
  client.connect();
  collection = client.db("easypark").collection("parkings")
  console.log(`server is running at port no ${PORT}`);
});
