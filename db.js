const mongoose = require("mongoose");

//define the MongoDB connection URL
// const mongoURL = "mongodb://localhost:27017/hotels";

mongoose.connect('mongodb://localhost:27017/hotels');


// setup  mongodb connection
// mongoose.connect('mongodb://localhost:27017/hotels', { useNewUrlParser: true, useUnifiedTopology: true });

//set the default connection
//mongoose maintains a default connetion object representing the mongo db connetion
const db = mongoose.connection;

//default event listeners for database connection
db.on('connected',()=>{
    console.log('Connected to mongoDB server');
})

db.on('error',(err)=>{
    console.log('MongoDB connetion err', err);
})

db.on('disconnected' ,()=>{
    console.log('MongoDB disconnected');
})

module.exports = db;