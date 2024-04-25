var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Game Begin', function (err) {
  if (err) throw err;
  console.log('Saved!');
});