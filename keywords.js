// var  -> function scoped ->
// let  -> blocked scoped  -> cannot change the value inside the block and can change outside
//const -> blocked scoped  -> 

const price1=20000
const price2=40000

let result= price1+price2
console.log(result);

var num=234
if(num%2===0){
    console.log("Even number");
    // num=2356
    let num=2356 // local scoped cannot be called outside the block
    let y= 2589
    console.log(y);
    const pi=3.14
   // pi=5678 -> cannot be changed inside
}
else{
    console.log("odd number")
}
console.log(num); // global scoped
//console.log(y);// local scoped
//console.log(pi);// local scoped