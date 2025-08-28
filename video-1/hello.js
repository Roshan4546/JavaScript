console.log("Hello Chai!");
// ! Operations

let num = 10;
console.log(num);
num++;
console.log(num);

// ** varinles 

//  varibles are used to store data in memory.

// Rules

// 1. variable name should start with a letter, underscore or dollar sign.
// 2. variable name should not start with a number.
// 3. variable name should not contain any special character except underscore and dollar sign.
// 4. variable name should not be a reserved keyword.
// 5. variable name should be meaningful and descriptive.
// 6. variable name should be in camelCase.
// 7. variable name should not be too long.
// 8. variable name should not be too short.
// 9. variable name should not be a single letter.
// 10. variable name should not be a single word.


// ! let 

// let is a block scope variable.
// let is used to declare a variable that can be reassigned.
// let is used to declare a variable that can be changed.
// let is used to declare a variable that can be updated.   
// it can't be redeclared in the same scope.
// let is used to declare a variable that can be updated.

let name = "John Doe"; // string
let age = 25; // number

// ! var 

// var is a function scope variable.
// var is used to declare a variable that can be reassigned.
// var is used to declare a variable that can be changed.
// var is used to declare a variable that can be updated.


var place = "new york"; // string
age = 30; // number



// ! const
// const is a block scope variable.
// const is used to declare a variable that cannot be reassigned.
// const is used to declare a variable that cannot be changed.
// const is used to declare a variable that cannot be updated.


const pi = 3.14; // number


// ! Data Types
// ? Data types are used to define the type of data that can be stored in a variable.

// ? there are 2 type of data types in javascript
// 1. Primitive data types
// 2. Non-primitive data types

// ! Primitive data types
// ? Primitive data types are the basic data types that are used to store a single value.
// ? Primitive data types are the building blocks of data types.
// ? Primitive data types are the most basic data types that are used to store a single value.

// Example of Primitive data types
//  string, number , boolean, null, undefined, symbol, bigint

let str = "hello"; // string
let num1 = 10; // number
let bool = true; // boolean
let n = null; // null
let u = undefined; // undefined
let s = Symbol("symbol"); // symbol
let b = BigInt(12345678901234567890); // bigint

// ! Non-primitive data types
// ? Non-primitive data types are the complex data types that are used to store multiple values.


// Example of Non-primitive data types
//  object, array, function, date, regex, map, set, weakmap, weakset

// ! Object

let obj = {
    name: "Roshan Patra",
    age: 20,
    place: "Chandpur",
    isMarried: false,
};

console.log(obj); // { name: 'Roshan Patra', age: 20, place: 'Chandpur', isMarried: false }

// ! Array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
};

// ! Function
// ? Function is a block of code that performs a specific task.

let sum = (a, b) => {
    return a + b;
}
console.log(sum(5, 7)); // 12

// ! Date
// ? Date is a built-in object that is used to work with dates and times.
let date = new Date();
console.log(date); // 2023-10-01T12:00:00.000Z

// ! Regex
// ? Regex is a built-in object that is used to work with regular expressions.
let regex = /[a-z]/;
console.log(regex); // /[a-z]/
