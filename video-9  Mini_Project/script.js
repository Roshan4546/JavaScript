let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newGame = document.querySelector("#New-Btn");
let message = document.querySelector(".msg-button");
let msg = document.querySelector("#msg");
let turnO = true; // playerXs playerO
let count = 0;
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was click");
        if (turnO == true) { // playerO's turn
            box.innerHTML = "O";
            turnO = false;
        }
        else { // playerX's turn
            box.innerHTML = "X";
            turnO = true;
        }
        count++;
        box.disabled = true; // disable btn due to further not change.
        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true; // disable btn due to further not change.
    }
}
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false; // disable btn due to further not change.
        box.innerText = ""; // clear the box
    }
}
const showWinner = (winner) => {
    msg.innerText = `${winner} is the winner`;
    message.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (pattern of winningConditions) { 
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner is", pos1);
                alert("winner is " + pos1);
                showWinner(pos1);
            }
            if(count == 9) {
                msg.innerText = `It's a draw`;
                message.classList.remove("hide");
                disableBoxes();
                break;
            }

        }
        // console.log("count", count);
    }
};

const resetGame = () => { 
    turnO = true; // playerXs playerO
    enableBoxes();
    message.classList.add("hide"); // hide the message
}

newGame.addEventListener("click", () => {
    resetGame(); // reset the game
});
resetbtn.addEventListener("click", () => {
    resetGame(); // reset the game
});