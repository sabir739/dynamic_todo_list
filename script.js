let totalTasks = 0;
let completedTasks = 0;

function addTask() {
let input = document.getElementById("taskInput");
let taskText = input.value.trim();

```
if (taskText === "") {
    alert("Task cannot be empty!");
    return;
}

let li = document.createElement("li");

// Checkbox
let checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.onclick = function () {
    li.classList.toggle("completed");
    if (checkbox.checked) {
        completedTasks++;
    } else {
        completedTasks--;
    }
    updateCounter();
};

// Task text
let span = document.createElement("span");
span.innerText = taskText;

// Buttons
let btnDiv = document.createElement("div");
btnDiv.className = "task-buttons";

// Edit Button
let editBtn = document.createElement("button");
editBtn.innerText = "Edit";
editBtn.onclick = function () {
    let newTask = prompt("Edit your task:", span.innerText);
    if (newTask !== null && newTask.trim() !== "") {
        span.innerText = newTask;
    }
};

// Delete Button
let deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete";
deleteBtn.onclick = function () {
    if (checkbox.checked) completedTasks--;
    li.remove();
    totalTasks--;
    updateCounter();
};

btnDiv.appendChild(editBtn);
btnDiv.appendChild(deleteBtn);

li.appendChild(checkbox);
li.appendChild(span);
li.appendChild(btnDiv);

document.getElementById("taskList").appendChild(li);

totalTasks++;
updateCounter();

input.value = "";
```

}

// Update Counter
function updateCounter() {
document.getElementById("total").innerText = totalTasks;
document.getElementById("completed").innerText = completedTasks;
}
