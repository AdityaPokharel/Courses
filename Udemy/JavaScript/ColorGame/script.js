
startOver();




function startOver() {

    var colors = ["rgb(255, 0, 0)",
            "rgb(255, 0, 0)",
            "rgb(255, 0, 0",
            "rgb(255, 0, 0)",
            "rgb(255, 0, 0",
            "rgb(255, 0, 0)"];


    // pick random color
    for(var i = 0; i < 6; i++){
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
        colors[i] = "rgb(" + red + ", " + green + ", " + blue + ")";
    }

    // select the squares
    var squares = document.querySelectorAll(".square");

    // pick one of the squares in random
    var chosenColorIndex = Math.floor(Math.random() * 6);
    var chosenColor = colors[chosenColorIndex];

    // apply colours to the square
    var bodyElement = document.querySelector("body");
    var statusDisplay = document.querySelector("#status");
    var restartButton = document.querySelector("#restart");
    restartButton.addEventListener("click", function() {
        startOver();
    });

    for(var i = 0; i < 6; i++) {
        squares[i].style.backgroundColor = colors[i];

        // Add click actions to each square
        squares[i].addEventListener("click", function() {
            var current = this.style.backgroundColor;
            var picked = chosenColor;

            // If the
            if(current === picked){
                statusDisplay.innerHTML("You Got It!");
                restartButton.innerHTML = "Play Again";
            }

            else {
                this.style.backgroundColor = "#424242";
                statusDisplay.innerHTML = "Try Again!";
                statusDisplay.className = "shake";
                setTimeout(function() {
                    statusDisplay.innerHTML="";
                    statusDisplay.className = "";
                }, 1000);

            }
        });
    }

    // select the title area and add the randomly selected colour in the html.
    var rgbTextArea = document.querySelector("#rgb-text-area");
    rgbTextArea.innerHTML = chosenColor.toUpperCase();
}


