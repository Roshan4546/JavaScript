// let len = 0;

// for (let i = 0; i <= 100; i++){
//     if (i % 2 == 0) {
//         console.log("num = ", i);
//         len++;
//     }
//     else {
//         continue;
//     }
// }
// console.log("Total even number is = ", len);

let gameNum = 25;

let guessNum = prompt("Enter the number : ");

while (gameNum !== guessNum) {
    if (gameNum > guessNum) {
        console.log("Number is too low");
        guessNum = prompt("Enter the number : ");
    }
    else {
        console.log("Number is too high");
        guessNum = prompt("Enter the number : ");
    }
}

console.log("Congratulation! You have guess the number");