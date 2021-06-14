const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const hello = document.querySelector("#hello");

const CLASSNAME_HIDDEN = "hidden"

function onLoginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(CLASSNAME_HIDDEN);
    hello.innerHTML =  `Hello ${userName}`;
    hello.classList.remove(CLASSNAME_HIDDEN);

}

loginForm.addEventListener("submit",onLoginSubmit);