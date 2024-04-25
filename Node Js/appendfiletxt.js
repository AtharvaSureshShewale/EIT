var fs=require('fs');

var content="Hello Atharva\n Welcome to Node Js\n Welcome to Anime World";

fs.appendFile('newfile.txt',content,function(err){
    if(err) return err;
    console.log('Saved');
})