const input = document.getElementById("text-input");
const text = document.getElementById("typed-text");

input.addEventListener("keyup", function() {
    text.textContent = input.value;
});
