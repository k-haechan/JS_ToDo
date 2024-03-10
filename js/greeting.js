const nameForm  = document.querySelector("#name-form");
const nameInput = nameForm.querySelector("input");
const greeting   = document.querySelector("#greeting")

const USERNAME_KEY = "userName";
const HIDDEN_CLASSNAME = "hidden";

function onSubmit(event) {
    event.preventDefault();
    const userName = nameInput.value;
    nameForm.classList.add("hidden");
    localStorage.setItem(USERNAME_KEY,userName);
    paintGreetings(userName)
}

function paintGreetings(userName) {
    greeting.innerText=`${userName}의 ToDoList`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName=localStorage.getItem(USERNAME_KEY);
if(savedUserName===null) {
    nameForm.addEventListener("submit",onSubmit);
} else {
    nameForm.classList.add("hidden");
    paintGreetings(savedUserName);
}