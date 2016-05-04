
var ENTER = 13;

function addTodo(event) {
  
  var todoInput = event.target;
  var newTodoText = todoInput.value.trim();
  
  if (event.which == ENTER && newTodoText != "") {
    todoInput.value = "";
    
    var newTodoItem = document.createElement('li');
    var newTodo = document.createElement('span');
    newTodo.innerHTML = newTodoText;
    newTodoItem.appendChild(newTodo);

    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'X';
    deleteButton.onclick = deleteTodo;
    newTodoItem.appendChild(deleteButton);

    var todoList = document.getElementById('todoList');
    todoList.insertBefore(newTodoItem, todoInput);
  }      
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
