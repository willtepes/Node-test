var express = require("express");
var app = express();
var fs = require("fs");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  res.send("<h1>Welcome to my Simple API</h1>");
})

app.get('/getdata', function (req, res, next) {
   fs.readFile( __dirname + "/" + "resumeData.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})
