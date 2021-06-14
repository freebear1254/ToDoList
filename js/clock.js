const clock = document.getElementById("clock");



function sayHello(){
    console.log("hello");
}

function getdate(){
    const date = new Date();
    const hours =String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function init(){    
    console.log("clock.js");
    getdate();
    setInterval(getdate,1000);
}
init();