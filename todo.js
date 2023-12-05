const tasks = [];
const tasksList = document.getElementById("list");
const addTaskInput = document.getElementById("add");
const tasksCounter = document.getElementById("tasks-counter");

console.log("Working");
function addTaskToDOM(task) {
  const li = document.createElement("li");

  li.innerHTML = ` 
  
    <input type="checkbox" id="${task.id}" data-id="${task.id}" ${
    task.done ? "checked" : " "
  } class="custom-checkbox">
    <label for="${task.id}">${task.text}</label>
    <img src="https://www.svgrepo.com/show/123434/trash.svg" class="delete" data-id="${task.id}" />
  
`;

  tasksList.append(li);
}
function renderList() {
  tasksList.innerHTML = " ";

  for (let i = 0; i < tasks.length; i++) {
    addTaskToDOM(tasks[i]);
  }
  tasksCounter.innerHTML = tasks.length;
}

function toggleTask(taskId) {
  const task = tasks.filter(function (task) {
    return task.id === taskId;
  });

  if (task.length > 0) {
    const currentTask = task[0];

    currentTask.done = !currentTask.done;
    renderList();
    showNotification("Task toggled successfully");
    return;
  }
  showNotification("could not toggle the task");
}

function deleteTask(taskId) {
  const newTasks = tasks.filter(function (task) {
    return task.id !== taskId;
  });
}

function addTask(task) {
  if (task) {
    tasks.push(task);
    renderList();
    showNotification("Task added sucessfully");
    return;
  }
}

function showNotification(text) {
  alert(text);
}

function handleInputKeypress(e) {
  if (e.key === "Enter") {
    const text = e.target.value;
    console.log("text", text);

    if (!text) {
      showNotification("Task cannot be empty");
      return;
    }

    const task = {
      text,
      id: Date.now().toString(),
      done: false,
    };

    e.target.value = "";
    addTask(task);
  }
}
addTaskInput.addEventListener("keyup", handleInputKeypress);
