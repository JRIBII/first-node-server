const http = require('http');
const fs =require("fs");
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {

  res.end('<h1>Hello Node!!!!</h1>\n');
});
/*fs.writeFile("welcome.txt", "hello node",(err)=>{
  err?console.log(err):console.log("file created")
});*/
fs.readFile("welcome.txt","utf-8",(err,data)=>{
  err?console.log(err):console.log(data)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

