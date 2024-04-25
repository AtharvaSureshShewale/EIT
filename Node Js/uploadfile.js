var http = require('http');
var formidable = require('C:/Users/DELL/node_modules/formidable');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      if (err) {
        console.error('Error parsing form:', err);
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Internal Server Error');
        return;
      }
      
      console.log('Files:', files); // Log the files object
      
      if (!files.filetoupload || files.filetoupload.length === 0) {
        console.error('No file uploaded');
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.end('No file uploaded');
        return;
      }
      
      var uploadedFile = files.filetoupload[0];
      var oldpath = uploadedFile.filepath;
      var newpath = 'C:/Users/DELL/uploads/' + uploadedFile.originalFilename; // Change this path to your desired location
      
      fs.rename(oldpath, newpath, function (err) {
        if (err) {
          console.error('Error moving file:', err);
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.end('Internal Server Error');
          return;
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('File uploaded and moved!');
        res.end();
      });
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
