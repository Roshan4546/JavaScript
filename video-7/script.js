// // Dom manipulation

// // Attribute
// // getAttribute
// let div = document.querySelector("div");
// console.log(div);


// let id = div.getAttribute("id");
// console.log(id);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// console.log(para.setAttribute("class","newclass")); // set new name of the class or id.


// // for style we do this type

// let divname = document.querySelector("div");
// console.log(divname.getAttribute("id"));
// console.log(div.style);
// div.style.background = "green";




// console.log(para.getAttribute("class"));
// para.style.color = "red"; // change color of the text
// para.style.background = "black"; // change background color of the text    

// para.style.width = "100px"; // change width of the text`

// para.innerText = "heloo";
// para.innerHTML = "<h1>hello</h1>"; // change the inner html of the text
// para.textContent = "hello"; // change the text content of the text


// // div.style.visibility = "hidden";


// ! to added new element.
// ? insert elements

// 1 node.append(el) // add at the end of node (inside)

let newbtn = document.createElement("button");
newbtn.textContent = "Click me";
console.log(newbtn);
let div = document.querySelector("div");

div.append(newbtn); // for last

newbtn.style.color = "red";
newbtn.style.background = "black";

// div.prepend(newbtn); // for first
// div.before(newbtn); // just before
// div.after(newbtn); // just after


let newHeading = document.createElement("h1");
newHeading.textContent = "Hello, World!";

document.querySelector("body").prepend(newHeading); 

let newbtn = document.querySelector("p");
button.remove();