var p1Button = document.getElementById("p1Button");
var p2Button = document.getElementById("p2Button");
var reset = document.getElementById("reset");
var display = document.getElementById("display");
var inp = document.getElementById("inp");
var label = document.getElementById("label");
var finalMessage = document.getElementById("finalMessage");
var p1Score = 0;
var p2Score = 0;
var max = 5;

p1Button.addEventListener("click", function() {
    if(p1Score < max && p2Score < max){
        p1Score++;
        display.textContent = p1Score + " | " + p2Score;
        if(p1Score == max) {
            display.innerHTML = "<span class=\"green\">" + p1Score + "</span> | " + p2Score;
            finalMessage.innerText = "Player 1 wins!"
        }
    }
});
p2Button.addEventListener("click", function() {
    if(p2Score < max && p1Score < max){
        p2Score++;
        display.textContent = p1Score + " | " + p2Score;
        if(p2Score == max) {
            display.innerHTML = p1Score + " | <span class=\"green\">" + p2Score + "</span>";
            finalMessage.innerText = "Player 2 wins!"
        }
    }
});

reset.addEventListener("click", function() {
    p1Score = 0;
    p2Score = 0;
    display.textContent = p1Score + " | " + p2Score;
    finalMessage.innerText = "";
});

inp.addEventListener("input", function() {
    max = inp.value;

});
