
var ENTER = 13;

function handleAdd(event) {
  var todoInput = event.target;
  var newTodoText = todoInput.value.trim();

  if (event.which == ENTER && newTodoText != "") {
    addTodo(newTodoText);
    todoInput.value = "";
  }
}

function addTodo(todoText) {
  var newTodoItem = document.createElement('li');
  var newTodo = document.createElement('span');
  newTodo.innerHTML = todoText;
  newTodoItem.appendChild(newTodo);

  var deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'X';
  deleteButton.onclick = deleteTodo;
  newTodoItem.appendChild(deleteButton);

  var todoList = document.getElementById('todoList');
  var todoInput = document.getElementById('todoInput');
  todoList.insertBefore(newTodoItem, todoInput);
}

function deleteTodo() {
  this.parentElement.remove();
}

function saveTodos() {
  var todoList = document.getElementById('todoList');
  var todoItems = todoList.getElementsByTagName('li');
  var allTodos = [];
  for (var i = 0; i < todoItems.length; i++) {
    var todo = todoItems[i].getElementsByTagName('span')[0];
    var todoText = todo.innerHTML;
    allTodos.push(todoText);
  }
  var todos = allTodos.join(',');
  window.localStorage.setItem('todos', todos);
}

function loadTodos() {
  var todos = window.localStorage.getItem('todos');
  var allTodos = todos.split(',');
  for (var i = 0; i < allTodos.length; i++) {
    addTodo(allTodos[i]);
  }
}
