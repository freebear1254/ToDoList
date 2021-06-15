const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input");
const TODOLIST = "todoList";
const savedTodos = JSON.parse(localStorage.getItem(TODOLIST));
const toDos=[];


function writeTodo() {
    if(savedTodos !== null){
        for(i=0;i<savedTodos.length; i++){
            toDos.push(savedTodos[i]);
        }        
         for (i = 0; i < toDos.length; i++) {
      paintTodo(toDos[i]);
        }
    }   
}

function saveTodos() {
    localStorage.setItem(TODOLIST, JSON.stringify(toDos));
}

function deleteTodo(evnet) {
    const deleteTarget = event.target.parentElement;
    deleteTarget.remove();    
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    span.innerText = newTodo;
    delBtn.innerText = "❌";
    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);
    delBtn.addEventListener("click", deleteTodo);
}


function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    toDos.push(newTodo);
    saveTodos();
    paintTodo(newTodo);
}

function init() {
    todoForm.addEventListener("submit", handleTodoSubmit);
    writeTodo();
}

init();
