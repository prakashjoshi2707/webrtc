var express = require("express");
var fs = require("fs");
var https = require("https");
var app = express();

app.use(express.static('public'))
app.use('/css',express.static(__dirname+'public/css'))
app.use('/js',express.static(__dirname+'public/js'))
app.use('/images',express.static(__dirname+'public/images'))


app.get('',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

https
  .createServer(
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app
  )
  .listen(3001,'0.0.0.0', function () {
    console.log(
      "Example app listening on port 3000! Go to https://localhost:3000/"
    );
  });