// import express from "express";
// import mongoose from 'mongoose';
// import cors from 'cors';
// import guestRouter from './router/guestRouter'
// const app = express();

// // app.use(bodyParser.json({limit: "20mb", extended:true}));
// // app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));


// const CONNECTION_URI = 'mongodb+srv://easypark:easypark@cluster0.hikxz.mongodb.net/easypark?retryWrites=true&w=majority'

// const PORT = process.env.PORT || 5000;

// mongoose.connect(CONNECTION_URI, {
//     useNewUrlParser: true, useUnifiedTopology: true
// }).then(()=> app.listen(PORT, () =>
// console.log(`connection established and running on port: ${PORT}`)))
// .catch((err) => console.log(err.message))

// app.get('/', (req, res) => res.status(200).send("Hello World!"));

// app.use(express.json());
// app.use(cors());


// app.use('/app/guest', guestRouter)

