const clock = document.getElementById("clock");



function sayHello(){
    console.log("hello");
}

function getdate(){
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}


setInterval(getdate,1000);



function init(){
    console.log("clock.js");
    getdate();
}
init();