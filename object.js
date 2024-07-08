//creating a object 
const a={
    //key:value
    name:"samridhi",
    age:21,
    email:"sammi56@gmail.com",
    color:["white","red","blue"]
}
console.log(a);
console.log(a.name); // if we want to access the key of any object we use dot operator
// console.log(Object.keys(""));
console.log(a.color);
console.log(a.color[1]);
a.color.push("black")
console.log(a.color);

a.password="1234567890" // adding new key to the object
console.log(a);
console.log("====================");
const smartphone=[  //array of objects
    {brand:"samsung", model:"s24",price:"120000",color:["blue","green"]},
    {brand:"apple", model:"15 pro max",price:"100000",color:["red","black"]},
    {brand:"one plus", model:"nordT",price:"12000",color:["pink","purple"]}
]
console.log(smartphone);
console.log("====================");
console.log(smartphone[0]); //first element of array of objects
console.log("====================");
console.log(smartphone[0].model)
console.log("====================");
console.log(smartphone[1].color[0])
console.log("====================");
console.log(smartphone[1].color[0])
object=
    {brand:"redmi", model:"note11",price:"10000",color:["red","white"]}

smartphone.push(object) 
console.log(smartphone);
//find the value of brand of each element

for(i=0;i<4;i++){
    console.log(smartphone[i].brand);
}
console.log("================");
//find the brands whose price is greator than 80000
let newsm=smartphone.filter((b)=>{return b.price>80000})
console.log(newsm);
console.log("================");
let newsm1=smartphone.filter((a)=>{return a.brand==="samsung"})
console.log(newsm1);
console.log("=======================");
let newsm12=smartphone.filter((a1)=>{return a1.color.includes("white")})
console.log(newsm12);

