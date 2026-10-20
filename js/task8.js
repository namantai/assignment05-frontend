const input = document.getElementById("task-input");
const addButton = document.getElementById("add-task");
const list = document.getElementById("task-list");
let tasks = [];

function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    const task = {
        text: taskText,
        completed: false
    };

    tasks.push(task);
    input.value = "";
    showTasks();
}

function showTasks() {
    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const item = document.createElement("li");
        const text = document.createElement("span");
        const deleteButton = document.createElement("button");

        text.textContent = tasks[i].text;
        deleteButton.textContent = "Delete";

        if (tasks[i].completed) {
            text.classList.add("completed");
        }

        text.addEventListener("click", function() {
            completeTask(i);
        });

        deleteButton.addEventListener("click", function() {
            deleteTask(i);
        });

        item.appendChild(text);
        item.appendChild(deleteButton);
        list.appendChild(item);
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    showTasks();
}

function completeTask(index) {
    tasks[index].completed = !tasks[index].completed;
    showTasks();
}

addButton.addEventListener("click", function() {
    addTask();
});

input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
