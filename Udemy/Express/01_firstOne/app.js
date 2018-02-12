/*
    $ npm install express
    
*/ 

var express = require("express");
var app = express();

// '/' => "Hi there!"
app.get("/", function(request, response){
    response.send("Hi there!");
});

// '/bye' => "Goodbye!"
app.get("/bye", function(request, response){
    response.send("Goodbye!");
} );

// '/dog' => "MEOW!"
app.get("/dog", function(request, response){
    response.send("MEOW!");
});

// Tell express to listen to the code
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started!!!");
});