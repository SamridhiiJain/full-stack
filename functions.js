// //function declaration

// function hello(){
// console.log("hello");
// console.log("world");
// }
// // function call
// hello()

// function helloagain(){
//     hello()
// }

// helloagain()
// helloagain()
// console.log("--------------------");

console.log("----------------------");
var add;
var a=10;
var b=8;
function addition(){
  add=a+b;
  console.log(add);
}
 
addition()
console.log("----------------------");

let arr=[1,3,5,7,8,9,2,4]
let avg;
let sum=0;
function average(){
    for(i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
    }
    avg=sum/(arr.length);
    console.log(avg);
}

average()
console.log("----------------------");
//arrow function
// anonymous function

//function parameters

function ad( a1, b1){
    sum=a1+b1;
    console.log(sum);
}
ad(10 , 7)

//default parameters

//rest parameters