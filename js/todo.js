const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const finishedList = document.getElementById("finished-list")
const todoInput = todoForm.querySelector("input");
const TODOLIST = "todoList";
const FINISHEDLIST ="finishedList"
const savedTodos = JSON.parse(localStorage.getItem(TODOLIST));
const finishedTodos =JSON.parse(localStorage.getItem(FINISHEDLIST));

const PENDING = "pending";
const FINISHED ="finished";

let toDos=[];
let finishList=[];




function writeTodo() {
    if(savedTodos !== null){
        toDos = savedTodos;
        savedTodos.forEach(element => paintTodo(element,PENDING));
        
    }
    if(finishedTodos !== null ){
        finishList=finishedTodos ;
        finishedTodos.forEach(element => paintTodo(element,FINISHED))
    }
}

function filterTodos(item,target){
    return item == target;
}

function saveTodos(type) {
    if(type === PENDING){
        localStorage.setItem(TODOLIST, JSON.stringify(toDos));
    }else if(type === FINISHED){
        localStorage.setItem(FINISHEDLIST, JSON.stringify(finishList));
    }
}

function deleteTodo(event) {
    let deleteTarget = event.target.parentElement;
    if(deleteTarget.nodeName === "BUTTON"){
       deleteTarget = deleteTarget.parentElement;       
    }        
    toDos = toDos.filter((toDo) => toDo.id !=parseInt (deleteTarget.id));
    deleteTarget.remove();    
    saveTodos(PENDING);

    const newTodoObj = {
        text : deleteTarget.querySelector("span").innerText,
        id : deleteTarget.id,
    }

    return newTodoObj;
}

function finished(event){
   const newTodo =  deleteTodo(event);
   console.log(newTodo);
   paintTodo(newTodo,FINISHED);
   saveTodos(FINISHED);
}
function reToDo(){

}

function paintTodo(newTodo,type) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const subBtn = document.createElement("button");
    span.innerText = newTodo.text;
    delBtn.innerHTML = `<i class="far fa-trash-alt"></i>`;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(subBtn);
    if(type === PENDING){
        subBtn.innerHTML = `<i class="fas fa-check"></i>`;
        todoList.appendChild(li);
        subBtn.addEventListener("click",finished);
    }else if(type ===FINISHED){
        subBtn.innerHTML =`<i class="fas fa-redo-alt"></i>`
        finishedList.appendChild(li);
        subBtn.addEventListener("click",reToDo);
    }
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
    paintTodo(newTodoObj,PENDING);
}

function init() {
    todoForm.addEventListener("submit", handleTodoSubmit);
    writeTodo();
}

init();
