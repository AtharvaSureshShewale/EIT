var http=require('http');
var url=require('url');

const hostname="127.0.0.1";
const port=3000;

const server=http.createServer(function(req,res){
res.statusCode=200;
res.setHeader('Content-Type','text/html');
var q=url.parse(req.url,true).query;
var txt=q.year+" "+q.month;
res.end(txt);
});

server.listen(port,hostname,()=>{
    console.log(`Server running on http://${hostname}:${port}/`);
})