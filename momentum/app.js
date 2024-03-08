const loginInput = document.querySelector("#login-form input");
const loginForm  = document.querySelector("#login-form");
const greeting   = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"

function onLogInSubmit(event) {
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    console.log(userName);
}

loginForm.addEventListener("submit",onLogInSubmit);