const mongoose = require("mongoose");

//Connection of mongodb
async function connectMongoDb() {
    mongoose.connect("mongodb://127.0.0.1:27017/node-app-1")
    .then(()=>console.log("MongoDB connected"))
    .catch((err)=>console.log("Mongo error", err));
}