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

app.get("/r/:subreddit", function(request, response){
    response.send("WELCOME TO A SUBREDDIT!");
});

app.get("/r/:subreddit/comments/:id/:title", function(request, response){
    console.log(request.params);
    response.send("Subreddit: " + request.params.subreddit);

})


// '/[anything]' => "invalid page!"
app.get("*", function(request, response){
    response.send("invalid page!");
});

// Tell express to listen to the code
app.listen(port=3000, function() {
    console.log("Server has started!!!");
});
