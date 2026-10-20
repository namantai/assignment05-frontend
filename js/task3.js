const box = document.getElementById("style-box");
const backgroundButton = document.getElementById("change-background");
const fontButton = document.getElementById("change-font");

backgroundButton.addEventListener("click", function() {
    box.style.backgroundColor = "#e04c11";
});

fontButton.addEventListener("click", function() {
    box.style.fontSize = "28px";
});
