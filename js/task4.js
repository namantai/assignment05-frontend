const list = document.getElementById("item-list");
const addButton = document.getElementById("add-item");
const removeButton = document.getElementById("remove-item");
let itemNumber = 3;

addButton.addEventListener("click", function() {
    const item = document.createElement("li");
    itemNumber = itemNumber + 1;
    item.textContent = "Item " + itemNumber;
    list.appendChild(item);
});

removeButton.addEventListener("click", function() {
    const lastItem = list.lastElementChild;

    if (lastItem) {
        lastItem.remove();
    }
});
