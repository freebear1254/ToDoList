const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const hello = document.querySelector("#hello");
const localUserName = localStorage.getItem("userName");


const CLASSNAME_HIDDEN = "hidden";
const userNameKey ="userName";
const saveUserName = localStorage.getItem(userNameKey);


function paintHello(username){
    hello.innerHTML = `Hello ${username}`;
    hello.classList.remove(CLASSNAME_HIDDEN);
}

if(saveUserName === null){
 loginForm.classList.remove(CLASSNAME_HIDDEN);   
 loginForm.addEventListener("submit",onLoginSubmit);
}else {
    paintHello(saveUserName);
}
    

function onLoginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(CLASSNAME_HIDDEN);    
    localStorage.setItem(userNameKey,userName);
    paintHello(userName);

}


function init(){
    
}

