var express = require("express");
var app = express();

app.get("/", function(request, response){
    response.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(request, response){
    // response.send("You fell in love with " + request.params.thing);
    var thing = request.params.thing;
    response.render("love.ejs", {thingVar: thing} );

});

app.get("/posts", function(request, response) {
    var posts = [
        {title: "Post 1", author: "Suzy"},
        {title: "My adorable pet bunny", author: "Charlie"},
        {title: "Can you believe this pomsky!?", author: "Andy"}
    ];
    response.render("posts.ejs", {posts: posts});
});





app.listen(port=3000, function() {
    console.log("Server started.");
})
