// ! Loops in JavaScript
// * For loop
// * While loop
// * Do while loop
// * For in loop
// * For of loop


// ! For loop

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 5; i++) {
//     console.log("hello, world!");
// }

// let sum = 0;
// for (let i = 1; i <= 5; i++){
//     console.log(sum += i);
// }

// ! while loop

// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// ! do-While loop

// let i = 1;
// do {
//     console.log("Apna college");
//     i++;
// }
// while(i > 5);

// ! For of Loop

// ? it helps to iterate over the array and string.

// TODO we not used in objects

// let str = "Apna College";
// let len = 0;
// for (let ele of str) {
//     console.log(ele);
//     len++;
// }
// console.log("String size is = ",len);


// ! For in loop
// ? it helps to iterate over the object
// ? it helps to iterate over the array and string.
// let obj = {
//     name: "Roshan",
//     age: 20,
//     cgpa: 8.0,
//     isPass : true
// };

// for(let ele in obj){
//     console.log(ele, obj[ele]);
// }

// ! Template Literals
// ? it is used to write the string in multiple lines.

// ** let specialTypeofString = `apna college`;
// ** console.log(specialTypeofString);
// ** console.log(typeof specialTypeofString);

// let obj = {
//     item: "Biscuit",
//     price: 20,
// };
// console.log(`This is a ${obj.item} and  the price is ${obj.price}`);


// ! important
//* to store the value in the string we use ${}
//* console.log(`The price of ${obj.item} is ${obj.price}`);
//* console.log("The price of " + obj.item + " is " + obj.price);

// * Functions in JavaScript
// * Function Declaration   -  function functionName() {}
// * Function Expression    -  let functionName = function() {}
// * Arrow Function         -  let functionName = () => {}

// * String Methods in JavaScript

// ? str.toUpperCase() - convert the string into uppercase
// ? str.toLowerCase() - convert the string into lowercase
// ? str.trim() - remove the extra space from the string
// ? str.charAt(index) - return the character at the given index

//alway create a new string for changes in the string and it is immutable
let str = "     Apna College";

console.log(str.toUpperCase()); // * cobvert the string into uppercase.
console.log(str.toLowerCase()); // * convert the string into lowercase.
console.log(str.trim()); // * remove the extra space from the string.
console.log(str.charAt(0)); // * return the charector at the given index.
console.log(str.slice(0, 5)); // * return the string from the given index.
console.log(str.concat(" is the best!")); // * add the string at the end of the original string.
console.log(str.split(" ")); // * split the string into an array of strings. 
console.log(str.replace("Apna", "My")); // * replace string from the given string.
console.log(str.includes("Apna")); // * it check given string is palced in the given string.
console.log(str.indexOf("College"));    // return the index of the first character of the string