// map => only works on array -> give output for all the values ene if they are not desired
let num=[1,2,3,4,5,6]

let newnum= num.map((n)=>{return n})
console.log(newnum);

let sqrnum=num.map((v)=>{return v**2})
console.log(sqrnum);

let even=num.map((x)=>{return x%2==0})
console.log(even);

//filter => only works on array ->doesnt give output for all the values only give desired output

let price=[2000,400,900,300,1000,900]
let newprice=price.filter((p)=>{return p>900})
console.log(newprice);

let num1=[2,3,5,7,6,4,8,9]
let eveno= num1.filter((y)=>{return y%2==0})
console.log(eveno);

let price1=[2000,400,900,300,1000,900]
let newprice1=price1.filter((p)=>{return (p>900 && p<2000)})
console.log(newprice1);


