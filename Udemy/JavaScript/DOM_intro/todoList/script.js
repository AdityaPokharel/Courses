var button = document.querySelector("#addButton");
var list = document.querySelector("#list");
var textInput = document.querySelector("#textIn");
var li;
update();
var listLength = 0;

function update() {
    li = document.querySelectorAll("li");
    for (var i = 0; i < li.length; i++) {
        li[i].addEventListener("mouseover", function () {
            this.classList.add("hovered");
        });
        li[i].addEventListener("mouseout", function () {
            this.classList.remove("hovered");
        });
        li[i].addEventListener("click", function () {
            this.classList.toggle("complete");
        });
    }
}

// button.addEventListener("click", function() {
//     if (textInput.value !== null && textInput.value !== "") {
//         list.innerHTML += "<li>"  + textInput.value + "</li>";
//         textInput.value = "";
//         listLength++;
//         update();
//     }
// });

