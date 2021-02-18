const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
const loadEventListeners = () => {
  // DOM load even
  document.addEventListener('DOMContentLoaded', getTasks);
  //add task event
  form.addEventListener('submit', addTask);
  //remove task event
  taskList.addEventListener('click', removeTask);
  //Clear task event
  clearBtn.addEventListener('click', clearTasks);
  //Filter tasks event
  filter.addEventListener('keyup', filterTasks);
};

// Get Tasks from LS
const getTasks = () => {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach((task) => {
    // Create element li
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    //Put text into variable
    liText = document.createTextNode(task);
    // Append text to li
    li.appendChild(liText);
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    //Append li to ul
    taskList.appendChild(li);
  });
};

// Add tasks
const addTask = (e) => {
  if (taskInput.value === '') {
    alert('Add a task');
  }
  // Create element li
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  //Put text into variable
  liText = document.createTextNode(taskInput.value);
  // Append text to li
  li.appendChild(liText);
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon HTML
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  //Append li to ul
  taskList.appendChild(li);

  // Store in LS
  storeTaskInLocalStorage(taskInput.value);

  //Clear input
  taskInput.value = '';

  console.log(li);

  e.preventDefault();
};

// Store Task
const storeTaskInLocalStorage = (task) => {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
};

//Remove Task
const removeTask = (e) => {
  //   console.log(e.target.parentElement.classList.contains('delete-item'));
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
    console.log(e.target);
  }
};

//Clear Tasks
const clearTasks = () => {
  //   taskList.innerHTML = '';

  //Faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
};

//Filter Tasks
const filterTasks = (e) => {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach((task) => {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
};

loadEventListeners();
