let newBtn = document.createElement("button");
newBtn.innerText = "click me";
console.log(newBtn);

document.querySelector("body").append(newBtn);
console.log(newBtn.style);

newBtn.style.background = "linear-gradient(to right, red, green)";
newBtn.style.color = "white";
newBtn.style.cursor = "pointer";
newBtn.style.borderRadius = "5px";
 

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

console.log(para.setAttribute("class","paraClass"));
console.log(para);