const express = require ('express');
const router = express.Router();
const parking = require('../model/parkingsSchema')

router.get("/", (req, res) => {

    parking.find().then((result)=>{
        res.send(result);
    }).catch((err)=>{
        console.log(error)
    })

    // const location= req.body.location;
    // const numbers = req.body.numbers;
    
  
    

    // const parkings = new parking({
    //     location,
    //     numbers
      
    // })

    // parkings.save()
})

module.exports = router