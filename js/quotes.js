const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const quotes = [
    {
        quote : "quote01",
        author : "author01"
    },
    {
        quote : "quote02",
        author : "author02"
    },
    {
        quote : "quote03",
        author : "author03"
    },
    {
        quote : "quote04",
        author : "author04"
    },
    {
        quote : "quote05",
        author : "author05"
    },
    {
        quote : "quote06",
        author : "author06"
    },
    {
        quote : "quote07",
        author : "author07"
    },
    {
        quote : "quote08",
        author : "author08"
    },
    {
        quote : "quote09",
        author : "author09"
    },
    {
        quote : "quote10",
        author : "author10"
    },
]

function init(){  
     
    const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];
    quote.innerText =todayQuote.quote;    
    author.innerText =todayQuote.author;    
}
init();