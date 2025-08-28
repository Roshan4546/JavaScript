// ! Function in JavaScript
// ? Block of code that can be called by name, can be invoke by code, can be pass data to it, can return data to the code that called it.
// * Function can be declared, defined, and invoked.
// * Function can be declared and defined in 2 ways: function declaration and function expression.

// ! Function Defination

// function myFunction() {
//     console.log("Hello World!");
// }

// myFunction(); // Hello World! This is a function.

// for (let i = 0; i < 3; i++) {
//     myFunction(); // call by function.
// }

// Hello World!
// Hello World!
// Hello World!
// Hello World!


// TODO function pass by argument.

// function myFunction2(msg, n) {
//     if (typeof msg === "string" && typeof n === "number") {
//         console.log(msg.repeat(n));
//     } else {
//         console.log("Invalid input. Please provide a string and a number.");
//     }
// }

// myFunction2(); // Invalid input. Please provide a string and a number.
// myFunction2("Hello World! ", 4); // Hello World! Hello World! Hello World! 


// myFunction2("Hello World!",3); // NaN (Not a number ) it show because msg is string and n is number so it can't multiply string with number.


// function sum(a, b) {
//     s = a + b;
//     return s;
// }

// let val = sum(5, 6);
// console.log(val); // 11

// function sum(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// function mul(a, b) {
//     return a * b;
// }

// function div(a, b) {
//     return a / b;
// }

//! Arrow Function

// let sum = (a, b) => a + b; // function varible = (parameter) => return value;
// let sub = (a, b) => a - b;
// let mul = (a, b) => a * b;
// let div = (a, b) => a / b;

// console.log(sum(5, 6)); // 11
// console.log(sub(5, 6)); // -1
// console.log(mul(5, 6)); // 30
// console.log(div(5, 6)); // 0.8333333333333334


// const printHello = () => {
//     console.log("Hello World!");
// }

// printHello(); // Hello World!


// function countVowel(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' ||
//             str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U') {
//             count++;
//         }
//     }
//     console.log(count);
// }

// countVowel("Hello!"); // 2



// ! forEach Loop in Array

// ? it is a higher order function that takes a function as an argument and applies that function to each element of the array.

// arr.forEach(function (element, index, array) {
//     console.log(element, index, array);
// });


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.forEach(function printValue(val) {
//     console.log(val);
// });

// arr.forEach((val, idx) => {
//     console.log(val, idx);
// });

// let arr1 = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10]; //! any work for array element

// arr1.forEach((val) => {
//     console.log(val * val);
    
// });


// ! Map Function in Array

// ? it is a higher order function that takes a function as an argument and applies that function to each element of the array and returns a new array.

// ? create a new array with the results of calling a provided function on every element in the calling array.

// * arr.map(function (element, index, array)

// let arr = ["apple", "banana", "mango", "orange", "grapes"];


// arr.map((val) => {
//     console.log(val);
// });

// let arr1 = arr.map((val) => {
//     return val;
// });

// console.log(arr1); // [ 'apple', 'banana', 'mango', 'orange', 'grapes' ]


// ! Filter Function in Array

// ? it is a higher order function that takes a function as an argument and applies that function to each element of the array and returns a new array.

// ? create a new array with all elements that pass the test implemented by the provided function. give true for a condition.

// * arr.filter(function (element, index, array)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let arr1 = arr.filter((val) => {
//     return val % 2 == 0;
// });

// console.log(arr1); // [ 2, 4, 6, 8, 10 ]


// ! Reduce Function in Array

// ? it is a higher order function that takes a function as an argument and applies that function to each element of the array and returns a single value.

// ? executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// * arr.reduce(function (accumulator, currentValue, index, array)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = arr.reduce((acc, val) => {
//     return acc + val;
// });

// console.log(sum); // 55

// let largest = arr.reduce((acc, val) => {
//     return acc > val ? acc : val;
// });

// console.log(largest); // 10