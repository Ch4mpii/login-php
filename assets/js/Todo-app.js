/*
TODO - Cuando se haga la validacion del login por API hare refactor de esto para hacerlo con MVC
 */
document.getElementById('addTaskBtn').addEventListener('click', addTask);

window.onload = function() {
    loadTasks();
};

function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    let newTask = createTaskElement(taskInput.value);
    taskList.appendChild(newTask);
    saveTask(taskInput.value);
    taskInput.value = "";
}

function createTaskElement(task) {
    let newTask = document.createElement("li");
    newTask.className = "taskItem";
    newTask.textContent = task;

    let deleteBtn = document.createElement("span");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerHTML = " &#10006;";
    deleteBtn.onclick = function() {
        taskList.removeChild(newTask);
        removeTask(task);
    };

    newTask.appendChild(deleteBtn);
    return newTask;
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let taskList = document.getElementById('taskList');
    tasks.forEach(task => {
        let taskElement = createTaskElement(task);
        taskList.appendChild(taskElement);
    });
}

function removeTask(taskToRemove) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task !== taskToRemove);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
