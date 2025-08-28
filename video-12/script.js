// ! Sync in js

// * Synchronous means the code runs in a particular sequence of instructions given in the program.
// * Each instruction waits for the previous instruction to complete its execution.

// console.log("one");

// * Asynchronous

// Due to synchronous programming, sometimes imp instructions get
// blocked due to some previous instructions, which causes a delay in the UI.
// Asynchronous code execution allows to execute next instructions
// immediately and doesn't block the flow.

// function hello() {
//     console.log("hell");
// }

// setTimeout(() => {
//     console.log("hello") //! asynchronyzied programming
// }, 4000);

// console.log("two");
// console.log("three");

// ! Callbacks

// ? A callback is a function passed as an argument to another function.

// function sum(a, b) {
//     console.log(a + b);
// }
// function calculator(a, b, sumcallback) {
//     sumcallback(a, b);
// }

// calculator(1, 2, sum);

// ! callback hell

// Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.
// (Pyramid of Doom)

// This style of programming becomes difficult to understand & manage.


// function getData(dataId, getNextData) { //2s
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }

// // ? Pyramid of doom.
// getData(1, () => {
//     console.log("getting data-2....");
//     getData(2, () => {
//     console.log("getting data-3....");
//         getData(3);
//     });
// });

// getData(1).then((res) => {
//     return getData(2);
// }).then((res) => {
//     return getData(3);
// }).then((res)=>{
//  console.log("sucess");
// });

// ! Promises

// * Promise is for “eventual” completion of task. It is an object in JS.
// ? it is object.
// * It is a solution to callback hell.

//   * let promise = new Promise( (resolve, reject) => { .... } )*
//   * Function with 2 handlers*
//   * *resolve & reject are callbacks provided by JS

// promise three state
// pending
// resolved
// reject


// Promises

// A JavaScript Promise object can be:

// Pending : the result is undefined

// Resolved : the result is a value (fulfilled)

// Rejected : the result is an error object

// resolve( result )

// reject( error )

// *Promise has state (pending, fulfilled) & some
// result (result for resolve & error for reject).

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise.");
//     // resolve("sucess");
//     reject("some error occur");
// });

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("sucess");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 10000);
//     });
// }

// TODO promise solve and reject

// let promise = getData(123);

// .then( ) & .catch( )

// promise.then( ( res ) => { .... } )

// promise.catch( ( err ) ) => { .... } )
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise.");
//         resolve("sucess");
//         // reject("promise is reject");
//     });
// };
// // ? we can get propor value. 

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise is fulfilled.",res);
// });
// promise.catch((err) => {
//     console.log("network error.",err);
// });
// todo Promises


// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("data1 print successfully.");
//         }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("data2 print successfully.");
//         }, 4000);
//     });
// }

// console.log("fetching data1....");

// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
//     console.log("fetching data2...");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log(res); // <-- Now this prints "data2 print successfully."
//     });
// });

// ! Async-Await

// * async function always returns a promise.

// * async function myFunc( ) { .... }

// * await pauses the execution of its surrounding async function until the promise is settled.



// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve("sucess");
//         }, 2000);
//     });
// }

// // await api();
// async function getweatherdata() {
//     await api();
//     await api();
// }

// ! IIFE : Immediately Invoked Function Expression

// * IIFE is a function that is called immediately as soon as it is defined.

// (function () {
//     console.log("data1");
//     console.log("data2");
//     console.log("data3");
//     console.log("data4");
// })();