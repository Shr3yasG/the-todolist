const tasks = [];
const taskList = document.getElementById("list");
const addTaskInput = document.getElementById("add");
const tasksCounter = document.getElementById("tasks-counter");

console.log("Working");

function renderList() {}

function markTaskAsComplete(taskId) {}

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
