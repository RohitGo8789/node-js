//const http = require('http'); //'http' built in module is used for creating servers
// const fs = require("fs");
// const url = require("url"); //to separate url elements like, protocol, domain, query parameters
const express = require("express"); //import the express

const app = express();  //initialising the function 

app.get("/", (req,res)=>{
  return res.end("Hello from HomePage");
})

app.get("/about", (req,res)=>{
  return res.end("Hello from About " + " hey " + req.query.name + " you are " + req.query.age);
})


// function myHandler (req,res){
//   if(req.url==="/favicon.ico") return res.end();
//   const log = `${Date.now()}: ${req.method} ${req.url} New Request Received\n`;
//   const myUrl = url.parse(req.url, true);
//   //console.log(myUrl);
//     fs.appendFile("log.txt",log, (err, data)=>{
//     switch(myUrl.pathname){
//       case '/': 
//         if(req.method === 'GET') res.end("HomePage");
//         break;

//       case '/about' : 
//         const username = myUrl.query.myname;
//         res.end(`Hi, ${username}`);
//         break;

//       case "/search":
//         const search = myUrl.query.search_query;
//         res.end("Here are your results for "+ search);
//         break;
//       case "/signup":
//         if(req.method === 'GET') res.end("This is a signup form");
//         else if(req.method === 'POST'){
//           //DB QUERY
//           res.end("Success");
//         }
//         break;
//       default: res.end("404 Not Found");
//     }
//   });
// }

// const myServer = http.createServer(app);//used for creating the server

// myServer.listen(8000, ()=> console.log("Server Started!")); //one server can run on only one port


app.listen(8000, ()=>console.log("Server Started"));