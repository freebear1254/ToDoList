const titles = document.querySelector('#titles');
const BASE_COLOR = "rgb(51, 136, 136)";
const OTHER_COLOR ="#55aaaa";
const CLICKED_CLASS = "clicked";


// function titlesClick(){
//     const currentColor = titles.style.color;
//     if (currentColor === BASE_COLOR){
//         titles.style.color = OTHER_COLOR;
//     }else{
//         titles.style.color = BASE_COLOR;
//     }
  
// }

// function titlesClick(){
//     const currentClass = titles.className;
//     if(currentClass !== CLICKED_CLASS){
//         titles.className = CLICKED_CLASS;
//     }else {
//         titles.className = "";
//     }
// }

// function titlesClick(){
    // const hasClass = titles.classList.contains(CLICKED_CLASS);
    // if(hasClass){
        // titles.classList.remove(CLICKED_CLASS)
    // }else {
        // titles.classList.add(CLICKED_CLASS);
    // }
// }
function titlesClick(){
    titles.classList.toggle(CLICKED_CLASS);
}

function init(){
    
    titles.addEventListener("click", titlesClick);
    console.log("index.js");
}


init();