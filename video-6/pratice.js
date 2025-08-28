// const fruits = document.getElementById("Fruits");

// // Set initial styles
// fruits.style.background = "linear-gradient(to right, red, yellow)";
// fruits.style.boxSizing = "border-box";
// fruits.style.width = "300px";
// fruits.style.padding = "20px";
// fruits.style.borderRadius = "10px";
// fruits.style.color = "white";
// fruits.style.transition = "all 3s ease-in-out";
// fruits.style.transform = "scale(1)"; // initial scale
// fruits.style.fontSize = "20px";
// fruits.style.textAlign = "center";
// fruits.style.fontFamily = "Arial, sans-serif";
// fruits.style.fontWeight = "bold";
// fruits.style.textTransform = "uppercase";
// fruits.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
// fruits.style.cursor = "pointer";
// fruits.style.userSelect = "none"; // Prevent text selection

// // Apply the transform after a short delay
// setTimeout(() => {
//     fruits.style.transform = "scale(1.1)";
// }, 100);  // 100ms delay

// // using class name.
// const heading = document.getElementsByClassName("name");

// for (let i = 0; i < heading.length; i++) {  
//     heading[i].style.color = "bkue";
//     heading[i].style.background = "linear-gradient(to right, pink, green)";
//     heading[i].style.fontSize = "30px";
//     heading[i].style.textAlign = "center";
//     heading[i].style.fontFamily = "Arial, sans-serif";
//     heading[i].style.fontWeight = "bold";
//     heading[i].style.textTransform = "uppercase";
//     heading[i].style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
// }

// // using tag

// const para = document.getElementsByTagName("p");

// for (let p of para) {
//     p.style.color = "pink";
//     p.style.padding = "20px";
//     p.style.background = "black";
//     p.style.borderRadius = "10px"

// }


// ! Query Selector

// it return node list.

//  document.querySelector("myId/myClass/tag");
//  ? return first element.
// let firstEle = document.querySelector("p");

// firstEle.style.color = "red";

// document.querySelectorAll("myId/myClass/tag");
// ? return all element.

// ! through class name

// let p1 = document.querySelector(".myClass");

// p1.style.color = "green";


// ! through id name

// let p2 = document.querySelector("#id");

// p2.style.background = "#fff";
// p2.style.border = "2px solid black";


// ! properties

// * tagname
// ? return tag for element node.

let first = document.querySelector("#myId");

// console.dir(first);

// ? inner text = return the text content of the element and all its children.

// ! in Dom their is three nodes.
// 1.  text node
// 2. comment node
// 3. element node


// ? tagName - tag name of the element

// let firEle = document.querySelector(".h2"); // it return the first element of the selector.
// console.dir(firEle); // it return the first element of the selector.

// let secEle = document.querySelector("#b");
// console.dir(secEle); // it return the first element of the selector.
// console.log(secEle.tagName); // it return the tag name of the element.

// ? innertext - text content of the element and all its descendants

console.log(document.body.firstChild);

// let div = document.querySelector("div"); // it return the first element of the selector.
// console.dir(div); // it return the first element of the selector.
// console.log(div.innerText); // it return the text content of the element and all its descendants.

// ? innerHTML - html content of the element and all its descendants

// let div = document.querySelector("div"); // it return the first element of the selector.
// console.dir(div); // it return the first element of the selector.
// console.dir(div.innerHTML); // it return the html content of the element and all its descendants.


// ? textContent - text content of the element and all its descendants

let div = document.querySelector("div"); // it return the first element of the selector.
console.dir(div); // it return the first element of the selector.
console.log(div.textContent); // it return the text content of the element and all its descendants.

let h1 = document.querySelector("h1"); // it return the first element of the selector.

