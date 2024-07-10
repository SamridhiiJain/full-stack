
  document.querySelector("body").style.backgroundImage="url(https://images.unsplash.com/photo-1504896287989-ff1fbde00199?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"

 document.querySelector("body").style.backgroundRepeat = "no-repeat"

 document.querySelector("body").style.backgroundSize = "cover"
 document.querySelector("body").style.height="100vh"

let element
// element=document.getElementsByClassName("conatiner")
// element[0].style.border="2px solid black"
element=document.querySelector(".container")
element.style.border="4px solid black"
element.style.backgroundColor="white"

element.style.borderRadius="20px"
element.style.padding="20px"
element.style.width="300px"
element.style.margin="auto"
element.style.marginTop="100px"


element=document.querySelector("img")
element.style.width="300px"
element.style.width="300px"
element.style.borderRadius="20px"

element=document.querySelector(".btn")
element.style.width="300px"
element.style.height="40px"

element.style.borderRadius="10px"
element.style.border="2px"

function xyz(){
  document.querySelector("body").style.backgroundImage="url(https://images.pexels.com/photos/1796725/pexels-photo-1796725.jpeg?auto=compress&cs=tinysrgb&w=600)"
  document.querySelector("button").style.backgroundColor="greenyellow"
  document.querySelector(".container").style.backgroundColor="black"
  
  document.querySelector(".container").style.color="white"

}

let newbtn
document.querySelector(".btn").addEventListener("click", xyz)