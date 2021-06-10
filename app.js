// const player = {
//     name : "kim",
//     point :10,
//     fat : false,
// };

// const kk=["water","potato",'tomato'];
// console.log(kk);
// kk.push("one");
// console.log(kk);

// const calculator ={
//     add : function(a,b){
//         return a+b
//     },
//     minus : function(a,b){
//        return a-b
//     },
//     divice : function(a,b){
//        return a/b
//     },
//     dd : function(a,b){
//        return a**b;
//     }
// }

// calculator.add(10,20);
// calculator.dd(10,1);

const age =parseInt(prompt("How old"));

function calculateKrAge(ageOfForeigner){
    return ageOfForeigner +2 ;
}

const krAge = calculateKrAge(age);
console.log(krAge);