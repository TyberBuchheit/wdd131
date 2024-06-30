// Initialize an empty array to store tasks
let tasks = [];

// Template function to generate HTML for a task
function taskTemplate(task) {
  return `
    <li ${task.completed ? 'class="strike"' : ""}>
      <p>${task.detail}</p>
      <div>
        <span data-function="delete">❎</span>
        <span data-function="complete">✅</span>
      </div>
    </li>`;
}

// Function to render the list of tasks
function renderTasks(tasks) {
  // Get the list element from the DOM
  const listElement = document.querySelector("#todoList");
  listElement.innerHTML = "";  // Clear the list
  // Generate HTML for each task and update the list element
  const html = tasks.map(taskTemplate).join("");
  listElement.innerHTML = html;
}

// Function to add a new task
function newTask() {
  // Get the value entered in the #todo input field
  const task = document.querySelector("#todo").value;
  // Add a new task object to the tasks array
  tasks.push({ detail: task, completed: false });
  // Render the updated list of tasks
  renderTasks(tasks);
}

// Function to remove a task
function removeTask(taskElement) {
  // Filter out the task from the tasks array based on the detail
  tasks = tasks.filter(
    (task) => task.detail != taskElement.querySelector('p').innerText
  );
  // Remove the task element from the DOM
  taskElement.remove();
}

// Function to mark a task as complete or incomplete
function completeTask(taskElement) {
  // Find the index of the task in the tasks array
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.querySelector('p').innerText
  );
  // Toggle the completed status
  tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
  // Toggle the 'strike' class to visually indicate completion
  taskElement.classList.toggle("strike");
  console.log(tasks);
}

// Function to manage task actions (delete or complete)
function manageTasks(e) {
  // Get the parent li element of the clicked target
  const parent = e.target.closest("li");
  // Check if the delete icon was clicked
  if (e.target.dataset.function === "delete") {
    removeTask(parent);
  }
  // Check if the complete icon was clicked
  if (e.target.dataset.function === "complete") {
    completeTask(parent);
  }
}

// Add event listeners
document.querySelector("#submitTask").addEventListener("click", newTask); // Listen for clicks on the submit button
document.querySelector("#todoList").addEventListener("click", manageTasks); // Listen for clicks on the todo list

// Initial render of the tasks list
renderTasks(tasks);
