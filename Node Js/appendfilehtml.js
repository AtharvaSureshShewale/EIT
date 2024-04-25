var fs = require('fs');

// Content to append (in HTML format)
var content = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My HTML File</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my HTML file.</p>
</body>
</html>
`;

// Append the content to the file
fs.appendFile('mynewfile1.html', content, function (err) {
  if (err) throw err;
  console.log('Content appended in HTML format!');
});
