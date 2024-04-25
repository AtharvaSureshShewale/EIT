var http = require('http');

const hostname = "127.0.0.1";
const port = 3000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Hello World!".toLocaleUpperCase());
  res.end();
}).listen(port, hostname, () => {
    console.log(`Server running on http://${hostname}:${port}/`);
});