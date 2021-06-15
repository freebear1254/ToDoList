const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input");
const TODOLIST = "todoList";
const savedTodos = JSON.parse(localStorage.getItem(TODOLIST));
let toDos=[];


function writeTodo() {
    // if(savedTodos !== null){
    //     for(i=0;i<savedTodos.length; i++){
    //         toDos.push(savedTodos[i]);
    //     }        
    //      for (i = 0; i < toDos.length; i++) {
    //   paintTodo(toDos[i]);
    //     }
    // }   
    if(savedTodos !== null){
        toDos = savedTodos;
        savedTodos.forEach(paintTodo);
    }
}

function filterTodos(item,target){
    return item == target;
}

function saveTodos() {
    localStorage.setItem(TODOLIST, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const deleteTarget = event.target.parentElement;
    deleteTarget.id;
    toDos = toDos.filter((toDo) => toDo.id !=parseInt (deleteTarget.id));
    deleteTarget.remove();    
    saveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    span.innerText = newTodo.text;
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
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    }
    toDos.push(newTodoObj);
    saveTodos();
    paintTodo(newTodoObj);
}

function init() {
    todoForm.addEventListener("submit", handleTodoSubmit);
    writeTodo();
}

init();
