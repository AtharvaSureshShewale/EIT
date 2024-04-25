var http=require('http');
var fs=require('fs');

const hostname="127.0.0.1";
const port=3000;

const server=http.createServer(function(req,res){
fs.readFile('demo.html',function(err,data){
    if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('404 Not Found');
        return res.end();
      }
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.write(data);
    return res.end();
});
});

server.listen(port,hostname,()=>{
console.log(`Server running on http://${hostname}:${port}/`);
});