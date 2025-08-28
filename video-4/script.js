// console.log("hello World");


//! Array

// let arr = {
//     std1: 92,
//     std2: 97,
//     std3: 91,
//     std4: 94,
// };

// for (let ele in arr) {
//     console.log(`${ele} = ${arr[ele]}`);
// }
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr1);
// console.log("Array size is : ", arr1.length);

// console.log(typeof arr1);
// console.log(Array.isArray(arr1));
// console.log(arr1 instanceof Array);
// console.log(arr1[0]);
// arr1[0] = 10;
// console.log(arr1[0]);

// ! String is immutable
// ! array is mutable



// console.log(arr1.push(10));  // * Add element at the end of the array
// console.log(arr1);

// console.log(arr1.pop());  // * Remove element from the end of the array
// console.log(arr1);

// console.log(arr1.toString(arr1));  // * Convert array to string
// console.log(arr1);

let arr2 = [11, 12, 13, 14, 15, 16, 17, 18, 19];

// console.log(arr1.concat(arr2));  // * Concatenate two arrays

// console.log(arr1.unshift(0));  // * Add element at the start of the array
// console.log(arr1);

// console.log(arr1.shift());  // * Remove element from the start of the array
// console.log(arr1);

// console.log(arr1.slice(2, 5));  // * Slice the array


let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr1.splice(2, 5, 7, 9));  // * Splice the array
console.log(arr1);