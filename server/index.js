import express from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({limit: "20mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));

app.use(cors());

const CONNECTION_URI = 'mongodb+srv://TechTach:<password>@easy-park.hylgm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=> app.listen(PORT, () =>
console.log(`connection established and running on port: ${PORT}`)))
.catch((err) => console.log(err.message))

// mongoose.set('useFindAndModify', false);


