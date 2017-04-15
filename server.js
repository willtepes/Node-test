var express = require("express");
var app = express();
var fs = require("fs");

app.get('/', function(request, response) {
  response.send("<h1>Hello Express</h1>");
})

app.get('/getdata', function (req, res) {
   fs.readFile( __dirname + "/" + "resumeData.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})
