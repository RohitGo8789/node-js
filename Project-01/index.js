const express = require("express"); 

//const users = require("./MOCK_DATA.json");

const mongoose = require("mongoose"); //mongoose package
const fs = require("fs");
const { type } = require("os");
const { Console } = require("console");

const z = require("./routes/user");


const app = express();
const PORT = 8000;





//Middleware -> plugin
app.use(express.urlencoded({extended:false}));

app.use((req,res,next)=>{
    fs.appendFile("log.txt", `\n ${Date.now()}: ${req.ip} ${req.method}: ${req.path}`,(err,data)=>{
        next();
    })
});

//Routes
app.use("/user", userRouter); 





app.listen(PORT, ()=>console.log(`Server started at Port: ${PORT}`));
