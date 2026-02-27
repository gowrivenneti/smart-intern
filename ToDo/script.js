let tasks = [];
let currentFilter = "all";

document.getElementById("addTaskButton")
  .addEventListener("click", addTask);

  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = "";
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    let filteredTasks = tasks;

    if (currentFilter === "completed") {
        filteredTasks = tasks.filter(task => task.completed);
    } else if (currentFilter === "pending") {
        filteredTasks = tasks.filter(task => !task.completed);
    }

    filteredTasks.forEach(task => {
        const taskItem = document.createElement("div");
        taskItem.className = "taskItem";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.dataset.id = task.id;

        const taskLabel = document.createElement("span");
        taskLabel.textContent = task.text;

        if (task.completed) {
            taskLabel.style.textDecoration = "line-through";
        }

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.dataset.id = task.id;

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskLabel);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
    });

    updateTaskSummary();
}

document.getElementById("taskList")
  .addEventListener("click", function (e) {

    const id = Number(e.target.dataset.id);

    if (e.target.type === "checkbox") {
        tasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        renderTasks();
    }

    if (e.target.tagName === "BUTTON") {
        tasks = tasks.filter(task => task.id !== id);
        renderTasks();
    }
});

document.getElementById("filterAll")
  .addEventListener("click", () => {
    currentFilter = "all";
    renderTasks();
});

document.getElementById("filterCompleted")
  .addEventListener("click", () => {
    currentFilter = "completed";
    renderTasks();
});

document.getElementById("filterPending")
  .addEventListener("click", () => {
    currentFilter = "pending";
    renderTasks();
});

function updateTaskSummary() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;

    document.getElementById("totalTasks").textContent = total;
    document.getElementById("completedTasks").textContent = completed;
    document.getElementById("pendingTasks").textContent = pending;
}