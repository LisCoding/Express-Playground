// Load the express module that we install using npm
var express = require("express");

// invoke var express and store the resulting application in var app
var app = express();

// lets handle the base route "/" and respond with "Hello Express"
app.get('/', function(request, response) {
  response.send("<h1>Hello Express</h1>");
  console.log("its working");
  
})

// Tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
})
