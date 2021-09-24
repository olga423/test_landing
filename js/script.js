let modal = document.getElementById("modal_window");
let close = document.getElementById("modal_close");
let button = document.getElementById("startButton");

button.onclick = function () {
    modal.style.display = "block";
 }
close.onclick = function () {
    modal.style.display = "none";
 }