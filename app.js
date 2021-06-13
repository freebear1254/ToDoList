const loginForm = document.querySelector("#login-form");
const loginInput  = loginForm.querySelector("input");


function onLoginSubmit(tomato){
    tomato.preventDefault();
    const userName= loginInput.value;
    console.log(tomato);
    
}

loginForm.addEventListener("submit",onLoginSubmit)