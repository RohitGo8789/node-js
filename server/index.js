const http = require('http'); //'http' built in module is used for creating servers\
const fs = require("fs");

const myServer = http.createServer((req, res)=>{ //used for creating the server
  const log = `${Date.now()}:${req.url} New Request Received\n`;
  fs.appendFile("log.txt",log, (err, data)=>{
    switch(req.url){
      case '/': res.end("Homepage");
      break;
      case '/about' : res.end("about");
      break;
      default: res.end("404 Not Found");
    }
    
  });
  // console.log(console.log(req));
  // res.end("Hello from server!");
}); 


myServer.listen(8000, ()=> console.log("Server Started!")); //one server can run on only one port

