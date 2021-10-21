import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import guestVehicleInfo from './model/guestSchema.js'

const app = express();

// app.use(bodyParser.json({limit: "20mb", extended:true}));
// app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));

app.use(cors());

const CONNECTION_URI = 'mongodb+srv://easypark:easypark@cluster0.hikxz.mongodb.net/easypark?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=> app.listen(PORT, () =>
console.log(`connection established and running on port: ${PORT}`)))
.catch((err) => console.log(err.message))

app.get('/', (req, res) => res.status(200).send("Hello World!"));



app.post("/guest_registration", (req, res) => {
    const guestSchema = req.body;

    guestVehicleInfo.create(guestSchema, (err, data) =>{
        if (err) {
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
});

app.get("/guest_registration", (req, res) => {

    guestVehicleInfo.find(guestSchema, (err, data) =>{
        if (err) {
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
});
// mongoose.set('useFindAndModify', false);


