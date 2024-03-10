const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "toDos";

function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo)=>toDo.id!==parseInt(li.id));
    li.remove();
    saveToDo();
}
 
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.addEventListener("click",deleteToDo);
    button.innerText = "❌";
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDo();
}
toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDo = localStorage.getItem(TODOS_KEY);
if(savedToDo) {
    const parsedToDo = JSON.parse(savedToDo);
    toDos=parsedToDo;
    parsedToDo.forEach(paintToDo);
}

function sexyFilter() {

}