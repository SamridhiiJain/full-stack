let element

// element = document.getElementById("header").innerText
// element = document.getElementById("header").innerHTML
// element = document.getElementById("header").getAttribute("class")
// element = document.getElementById("header").getAttribute("style")
// element = document.getElementById("header").getAttributeNode("class")
element = document.getElementById("header").attributes


console.log(element)


// let x=document.getElementById("header").innerText="hhiiii dom"
// let x=document.getElementById("header").innerHTML="<h2>hhiiii dom</h2>"
// document.getElementById("header").setAttribute("class","xyz")
// let x = document.getElementById("header").getAttribute("class")
// console.log(x);

//querySelector-> target the first occurence of that css
//querySelectorAll-> target the first occurence of that css

let a=document.querySelectorAll("#header")
console.log(a);
let b=document.querySelectorAll("#header")[0]
console.log(b);
let c=document.querySelectorAll("#header")[1]
console.log(c);