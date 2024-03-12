/*
1. toDoForm에서 입력 받으면 handleToDoSubmit(event)실행
2. handleToDoSubmit(event)는 기본실행 막고, 새로운 객체(todo+id)생성 후 toDos에 저장, paintToDo 호출해서 객체 출력, saveToDo로 저장
3. paintToDo(newToDo)는 li태그 생성, li에 id 주입(delete를 위해), li는 span+button, 각각에 todo,버튼 생성 후 연결, li태그 ul태그 밑에 추가(appendChild)
4. delete ToDo 생성, event.target.parentElement로 상위객체 참조, id값 확인 후 toDos배열값 filter로 해당 id값 제거, li태그 remove(), savedToDo로 local 덮어쓰기
- savedToDo : toDos배열에 저장되어있는 toDo리스트를 localStorage에 JSON문자열로 변환 후 저장, JSON.stringify()로 변환
*/

const toDoForm = document.querySelector("#todo-form");
const toDoInput= toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos=[];
const TODOS_KEY = "toDos";

function saveToDo() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos=toDos.filter(toDo => toDo.id!==parseInt(li.id));
    li.remove();
    saveToDo();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id=newToDo.id;
    const span = document.createElement("span");
    span.innerText=newToDo.text;
    const button = document.createElement("button");
    button.innerText="X";
    button.addEventListener("click",deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const toDo = toDoInput.value;
    toDoInput.value="";
    const newToDoObj = {text:toDo, id:Date.now()};
    toDos.push(newToDoObj);
    saveToDo();
    paintToDo(newToDoObj);
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDo = localStorage.getItem(TODOS_KEY);
if(savedToDo) {
    const parseToDo = JSON.parse(savedToDo);
    toDos=parseToDo;
    parseToDo.forEach(paintToDo);
} 