
var ENTER = 13;

function addTodo(event) {
  
  var todoInput = event.target;
  var newTodoText = todoInput.value.trim();
  
  if (event.which == ENTER && newTodoText != "") {
    todoInput.value = "";
    
    var newTodoItem = document.createElement('li');
    newTodoItem.innerHTML = newTodoText;

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