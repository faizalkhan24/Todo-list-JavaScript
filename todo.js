
function add() {

    var input = document.getElementById("taskInput");
    var list = document.getElementById("taskList");
    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = input.value + '<button onclick = "removeTask(this)">Remove</button>';
    list.appendChild(li);

    input.value = "";
}

function removeTask(button) {
    var li = button.parentElement;
    li.parentElement.removeChild(li);
}