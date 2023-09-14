document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement("li");
        taskItem.className = "list-group-item d-flex justify-content-between align-items-center";
        taskItem.innerHTML = `
            ${taskText}
            <div>
                <button class="btn btn-danger btn-sm mr-1" onclick="changeStatus(this, 'todo')">To-Do</button>
                <button class="btn btn-warning btn-sm mr-1" onclick="changeStatus(this, 'doing')">Doing</button>
                <button class="btn btn-success btn-sm" onclick="changeStatus(this, 'done')">Done</button>
            </div>
        `;
        taskList.appendChild(taskItem);
    }
});

function changeStatus(button, status) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.remove("list-group-item-danger", "list-group-item-warning", "list-group-item-success");
    switch (status) {
        case "todo":
            taskItem.classList.add("list-group-item-danger");
            break;
        case "doing":
            taskItem.classList.add("list-group-item-warning");
            break;
        case "done":
            taskItem.classList.add("list-group-item-success");
            break;
    }
}
