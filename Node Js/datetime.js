var http=require('http');
var dt=require('./datetimemodule');

const hostname="127.0.0.1";
const port=3000;

const server=http.createServer(function(req,res){
res.statusCode=200;
res.setHeader('Content-Type','text/html');
res.write("Date and Time: "+dt.myDateTime());
res.end();
});

server.listen(port,hostname,()=>{
console.log(`Server running at http://${hostname}:${port}/`);
});