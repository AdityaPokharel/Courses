var express = require("express");
var app = express();


app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var currentAnimal = req.params.animal;
    var sound;
    if(currentAnimal === "pig"){
        sound = "oink";
    }
    else if(currentAnimal === "cow"){
        sound = "moo";
    }
    else if(currentAnimal === "dog") {
        sound = "woof";
    }
    else {
        sound = "lol idk";
    }
    res.send("The " + currentAnimal + " says " + sound)
});

app.get("/repeat/:word/:number", function(req, res){
    var num = parseInt(req.params.number);
    var word = req.params.word;
    var displayString = "";
    for(var i = 0; i < num; i++){
        displayString += word + "\n";
    }
    res.send(displayString);
});

app.get("*", function(req, res){
    res.send("Sorry, page not found!");
})

app.listen(port=3000, function(){
    console.log("Server has started.");
})
