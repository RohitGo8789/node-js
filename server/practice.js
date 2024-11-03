const http = require("http");
const url = require('url');

const myServer= http.createServer((req, res)=>{
  const pathname = url.parse(req.url).pathname;
  switch (pathname) {
    case '/home':
      res.end("Hello Server");
      break;
  
    default: res.end("Error 404");
      break;
  }
})

myServer.listen(8000, ()=> console.log("Server Started!"));