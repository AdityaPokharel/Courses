var rgbTextArea = document.querySelector("#rgbValue");


/* Create 6 random RGB values */
var rgbValues = [];
for(var i = 0; i < 6; i++) {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    rgbValues.push([red, green, blue]);
}


/* Choose one of the random RGB values */
var chosenRgbIndex = Math.floor(Math.random() * 6);

// TODO: remove this.
rgbTextArea.innerHTML = "RGB(" + rgbValues[chosenRgbIndex][0] + ", " + rgbValues[chosenRgbIndex][1] + ", " + rgbValues[chosenRgbIndex][2] + ");";

var squares = document.querySelectorAll(".square");
for(var i = 0; i < squares.length; i++) {
    squares[i].setAttribute("style", "background-color: rgb(" + rgbValues[i][0] + ", " + rgbValues[i][1] + ", " + rgbValues[i][2] + ")");
    // squares[i].innerHTML = rgbValues[i];
    var s = i;
    var chosenSquare = document.querySelectorAll(".square")[chosenRgbIndex];
    squares[i].addEventListener("click", function () {
        console.log("this = " + this + " chosen = " + chosenSquare);
        if(this === chosenSquare) {
            this.innerHTML = "<i class=\"fas fa-check\"></i>";
            document.location.reload();
        }
        else {
            this.innerHTML = "<i class=\"fas fa-times\"></i>"
        }
    });
}