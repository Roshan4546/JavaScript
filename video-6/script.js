// ! DOM - Doucment Object Model

// alert("Hello!");
// console.log("hello!");

// * Window object - global object
// * Document object - represents the HTML document loaded in that window
// * it is brower's object and automatically created by browser

// console.log(window); // window object

window.console.log("Hello!"); // window object
window.alert("Hello!"); // window object


// TODO Starting with the DOM

// * when a page is loaded the browser creates a DOM of the page
// * DOM is a tree structure of the HTML document

// console.log(window); // it only print
// console.dir(document); // document object print properties and methods

// console.dir(document.body);
// console.log(document.body);

// document.body.childNodes[1].textContent = "hello DOM";
// document.body.childNodes[1].innerText = "Roshan";


// For the dynamic changes in html we use dom.

// !  DOM Manipulation


// select using their id

// let para = document.getElementById("para"); // return value of para

// console.dir(para);

//  select using thier class

// let h = document.getElementsByClassName("h2"); // it return hrml collection string.
// console.dir(h);
// console.log(h);

// // * select using thier tag name

// let para = document.getElementsByTagName("p"); // it return hrml collection string.
// console.dir(para);
// console.log(para);


// ! Query Selector

// it return node list.

// let firEle = document.querySelector("p");
// console.log(firEle); // it return the first element of the selector.
// console.dir(firEle); // it return the first element of the selector.

// let allEle = document.querySelectorAll("p"); // it return all the elements of the selector.
// console.log(allEle); // it return all the elements of the selector.


// ! DOM  Properties and Methods

// ? tagName - tag name of the element

// let firEle = document.querySelector(".h2"); // it return the first element of the selector.
// console.dir(firEle); // it return the first element of the selector.

// let secEle = document.querySelector("#b");
// console.dir(secEle); // it return the first element of the selector.
// console.log(secEle.tagName); // it return the tag name of the element.

// ? innertext - text content of the element and all its descendants

// console.log(document.body.firstChild);

// let div = document.querySelector("div"); // it return the first element of the selector.
// console.dir(div); // it return the first element of the selector.
// console.log(div.innerText); // it return the text content of the element and all its descendants.

// ? innerHTML - html content of the element and all its descendants

// let div = document.querySelector("div"); // it return the first element of the selector.
// console.dir(div); // it return the first element of the selector.
// console.dir(div.innerHTML); // it return the html content of the element and all its descendants.


// ? textContent - text content of the element and all its descendants

// let div = document.querySelector("div"); // it return the first element of the selector.
// console.dir(div); // it return the first element of the selector.
// console.log(div.textContent); // it return the text content of the element and all its descendants.