const box = document.getElementById("mouse-box");

box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "#e54b4b";
    box.textContent = "CSS";
});

box.addEventListener("mouseout", function() {
    box.style.backgroundColor = "#1769ff";
    box.textContent = "HTML";
});
