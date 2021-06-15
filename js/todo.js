const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input");
const TODOLIST = "todoList";


function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newTodo;
    button.innerText ="❌";
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);

   
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value ="";
    paintTodo(newTodo);
}
todoForm.addEventListener("submit",handleTodoSubmit)