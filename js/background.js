const backgroundColor = ["#011126","#262626","#272F40","#3D3E40","#261F1D","#4F5950","#222622","#58734C","#400224"] ;    

function chageBgColor(){
    const random =Math.floor(Math.random()*backgroundColor.length) ;
    document.body.style.backgroundColor =backgroundColor[random];
}



function init(){
    chageBgColor();

}
init();
