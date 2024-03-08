// HTML 블록 객체 변수화
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// form 입력은 default 실행 막고, 입력받은 값 local storage에 저장, 그에따라 UI로직 변경

function onLogInSubmit(event) {
    event.preventDefault(); // 새로고침x
    const userName = loginInput.value;   // 입력값 저장
    greeting.innerText=`Hello ${userName}!`; // 인사문구 저장
    loginForm.classList.add("hidden");       // 입력폼 non-display
    greeting.classList.remove("hidden");     // greeting은 distplay
    localStorage.setItem("userName", userName); // 입력값은 로컬 저장소에 저장
}

// loginForm에 이벤트 설정
const storedUserName = localStorage.getItem("userName")
if(storedUserName==null) {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLogInSubmit);
} else {
    greeting.classList.remove("hidden");
    greeting.innerText = `Hello ${storedUserName}!`; // 인사문구 저장
}

