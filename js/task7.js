const firstInput = document.getElementById("first-number");
const secondInput = document.getElementById("second-number");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const result = document.getElementById("result");

function getNumbers() {
    if (firstInput.value === "" || secondInput.value === "") {
        result.textContent = "Please enter both numbers.";
        return null;
    }

    const firstNumber = Number(firstInput.value);
    const secondNumber = Number(secondInput.value);
    return [firstNumber, secondNumber];
}

addButton.addEventListener("click", function() {
    const numbers = getNumbers();

    if (numbers) {
        result.textContent = "Result: " + (numbers[0] + numbers[1]);
    }
});

subtractButton.addEventListener("click", function() {
    const numbers = getNumbers();

    if (numbers) {
        result.textContent = "Result: " + (numbers[0] - numbers[1]);
    }
});

multiplyButton.addEventListener("click", function() {
    const numbers = getNumbers();

    if (numbers) {
        result.textContent = "Result: " + numbers[0] * numbers[1];
    }
});

divideButton.addEventListener("click", function() {
    const numbers = getNumbers();

    if (numbers) {
        if (numbers[1] === 0) {
            result.textContent = "Cannot divide by zero.";
        } else {
            result.textContent = "Result: " + numbers[0] / numbers[1];
        }
    }
});
