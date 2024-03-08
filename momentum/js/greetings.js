const loginInput = document.querySelector("#login-form input");
const loginForm  = document.querySelector("#login-form");
const greeting   = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "userName"

function onLogInSubmit(event) {
    event.preventDefault();                       // submit event Default인 페이지 새로고침을 막는다.
    const userName = loginInput.value;            // 입력값을 변수에 저장한다.
    loginForm.classList.add(HIDDEN_CLASSNAME);    // Form 양식을 안보이도록 한다.
    localStorage.setItem(USERNAME_KEY, userName); // 로컬스토리지에 입력받은 값을 저장한다.
    paintGreetings(userName);                     // 입력받은 값을 통해 Hello ~~를 출력한다.
}
 
function paintGreetings(userName) {
    greeting.innerText = `Hello ${userName}!`; // 해당 값 출력
    greeting.classList.remove(HIDDEN_CLASSNAME); // .hidden제거
}


// ------------------- 로컬 스토리지에 저장된 값을 통해서 로그인을 유지시킴 -----------------------
const savedUserName = localStorage.getItem(USERNAME_KEY); 

if (savedUserName==null) {                              // 로컬 스토리지에 저장된 값이 없으면
    loginForm.classList.remove(HIDDEN_CLASSNAME);       // 입력 Form display
    loginForm.addEventListener("submit", onLogInSubmit);// Form에 이벤트 리스너 연결 (로그인 입력 대기)
} else {                                                // 저장된 값이 있으면(로그인 했으면)
    paintGreetings(savedUserName);                      // Hello ~~ 화면에 표시
}