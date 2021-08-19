//import http from 'http';
var http = require("http");
var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h2><font color='red'>Hello Node Http!!!</font></h2>");
  res.end();
});

server.listen(3000);
console.log("server running local host port 3000");
