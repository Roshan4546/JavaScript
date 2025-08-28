// ! Event in js
// the change in the state of an object is known as an event.
// Events are fired to notify code of "interesting changes" that may affect code execution.

// mouse event
// key board event
// form event
// print event and maby more


let btn = document.createElement("button");
btn.textContent = "Click on me!";
console.log(btn);
console.log(btn.style);
btn.style.background = "blue";
btn.style.color = "white";
btn.style.border = "none";
btn.style.padding = "10px 20px";
btn.style.fontSize = "16px";
btn.style.cursor = "pointer";1
btn.style.margin = "20px";
btn.style.borderRadius = "5px";
btn.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
btn.style.transition = "background-color 0.3s, transform 0.3s";
btn.addEventListener("click", () => {
    alert("Button clicked!");
    console.log("Button clicked!");
    btn.style.background = "green";
    btn.style.transform = "scale(1.1)";
});
const handlers = addEventListener("mouseover", function () {
    btn.style.background = "lightblue";
    btn.style.transform = "scale(1.05)";
});


document.querySelector("body").append(btn); // add button to the body

// ! remove event

btn.removeEventListener("mouseover", handlers); // remove event



// javaScript event handleing is more powerful than html event handling(inline event).


// ? Event Object

// it is a special object that has details about the event that occurred.
// All event handlers receive an event object as the first argument.



let btn2 = document.createElement("button");
btn2.textContent = "Click on me!";
console.log(btn2);

btn2.style.background = "blue";
btn2.style.color = "white";
document.querySelector("body").append(btn2); // add button to the body
btn2.onclick = (evt) => {
    console.log(evt); // event object
    console.log(evt.target); // target element
    console.log(evt.type); // event type
};


let modeBtn = document.querySelector(".btn3");
let currMode = "light";
let body = document.querySelector("body");
console.log("You are trying to change the mode");
modeBtn.addEventListener("click", function () {
    
    if(currMode === "light") {
        currMode = "dark";
        // document.body.style.background = "black";
        // document.body.style.color = "white";
        // modeBtn.style.background = "white";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else {
        currMode = "light";
        // document.body.style.background = "white";
        // document.body.style.color = "black";
        // modeBtn.style.background = "black";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});