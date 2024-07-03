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
console.log("-------------------");
for(i=10;i>0;i--) {
    console.log(i); 
}
console.log("-------------------");
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
console.log("--------------------");

//for in , for of
for(i of car){   //for of -> tells the value at index
    console.log(i);
}
console.log("--------------------");

for(x in car){ //for in -> tells the index
    console.log(x);
    console.log(car[x]); //tells the value at that index location
}

console.log("--------------------");
var sum=0;
for(i=1;i<30;i++){
    if(i%3===0)
        {
            sum=sum+i; 
        }
}
console.log(sum);

console.log("--------------------");
var sum=0;
for(i=1;i<20;i++){
    if(i%3===0 && i%5==0)
        {
            sum=sum+i; 
        }
}
console.log(sum);
console.log("--------------------");

//while
//syntax of while

//initialisation
//while(condition)
//{
    //block
    //updation
//}
var i=0
 while(i<10){
    console.log(i);
    i++
 }
 console.log("------------");
 let y=0
 while(y<10){
    console.log(y);
    y++
 }
 console.log("--------------");

 let f=5;
 let e=1;
 while(e<=10)
    {
        // console.log(f*e);
        console.log(`5 * ${e} =${f*e}`);
        e++
    }

    console.log("----------");
    
    //do while
    //syntax of do while
    //initialisation
    //do{
    // block 
    //updation 
    //}
    //while(condition)
    i=0
    do{
        console.log(i);
        i++
    }while(i<=5)
        console.log("-----------");

        for(i=0;i<=10;i++){
            if(i==3){
                break //brings cursor out of the loop
            }
            console.log(i);
        }

        console.log("-----------");

        for(i=0;i<=10;i++){
            if(i==3){
                continue //jumps the condition
            }
            console.log(i);
        }

        console.log("-----------");