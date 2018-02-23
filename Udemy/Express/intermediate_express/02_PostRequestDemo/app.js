var express = require("express");
var app = express();
var bodyparser = require("body-parser");

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];


app.use(bodyparser.urlencoded({extended: true}));


app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addfriend", function(req, res) {
    // res.send("YOU HAVE REACHED THE POST ROUTE!!!");
    // console.log(req.body);
    friends.push(req.body.newFriend);
    res.redirect("friends");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});

app.listen(port=3000, function(){
    console.log("Server started!");
});
