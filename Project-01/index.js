const express = require("express"); 
const {connectMongoDb} = require("./connection");
//const users = require("./MOCK_DATA.json");

const mongoose = require("mongoose"); //mongoose package
const fs = require("fs");
const { type } = require("os");
const { Console } = require("console");


const userRouter = require("./routes/user");
const {logReqRes} = require("./middlewares");


const app = express();
const PORT = 8000;

//Connection
connectMongoDb("mongodb://127.0.0.1:27017/node-app-1").then(()=>console.log("MongoDb connected!!"));



//Middleware -> plugin
app.use(express.urlencoded({extended:false}));
app.use(logReqRes("log.txt"));

//Routes
app.use("/api/users", userRouter); 





app.listen(PORT, ()=>console.log(`Server started at Port: ${PORT}`));
