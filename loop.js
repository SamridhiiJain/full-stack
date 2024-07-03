// for, while, do while

//syntax for for loop
//for(initialisation; condition; updation)
//{
    //block
//}
for(i=0;i<5;i++) {
    console.log(i); 
}
console.log("---------------");
let car=["BMW","Vokswagon","Tesla"] //array
console.log(car.length); //length of the array
for(i=0;i<car.length;i++){
    console.log(car[i]); //indexing
}
console.log("---------------");
for(i=10;i>0;i--) {
    console.log(i); 
}
console.log("---------------");
for(i=1;i<=20;i++){
    if(i%2===0)
        {
            //console.log(i+" "+ "even");
            console.log(`number ${i} is even`); 
        }
        else{
            console.log(i+" "+ "odd");
        }
}
console.log("---------------");