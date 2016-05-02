
var ENTER = 13;

function addTodo(event) {
  
  var todoInput = event.target;
  var newTodoText = todoInput.value.trim();
  
  if (event.which == ENTER && newTodoText != "") {
    todoInput.value = "";
    var newTodoItem = document.createElement('li');
    newTodoItem.innerHTML = newTodoText;
    var todoList = document.getElementById('todoList');
    todoList.insertBefore(newTodoItem, todoInput);
  }      
}
  