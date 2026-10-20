const button = document.getElementById("change-text");
const text = document.getElementById("text");

button.addEventListener("click", function() {
    text.textContent = "Bye!";
});
