// ! Types of function
console.log("Types of functions : - ")

// ? function expresion.
// ** function name is fuc. We store this function in a variable.


let fuc = function () {
    console.log("function expresion.")
}

fuc();


// ? function declaration.

function declaration() {
    console.log("function declaration.")
}
declaration();
// ? Fat arrow function.

let fat = () => {
    console.log("Fat arrow function") // TODO - hardcodeed.
};

fat();


// ! Parameters and Arguments
console.log("Parameters and Arguments : - ");


function dance(v) {  // ?  v is parameter 
    console.log(`${v} is dancing.`) // if you wants value in function use "${}"
}

dance("Horse"); // Arguments.
dance("Cow");



// ! Default, rest, and spread parameters. 

console.log("Default, rest, and spread parameters : - ");


function add(v1, v2) {  // ** if you wants default value v1 = 0 and v2 = 0
    console.log(v1 + v2); //** undefine+undefine = NaN  */
}
add(4, 5); //! if i am not passing value as parameter it show NaN.

// ! Rest
function abcd(a, b, c, ...val) {
    console.log(a, b, c, val);
}

abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);   // * whenever we use much number of parameter to over come that we use Rest ...rest/spread.

// ? if ... use in function parameter we use rest.
// ? if ... use in array or object we use spread.



// ! Return values and early return values.

// ? Return 


function Return() {
    return 12;
}
console.log(Return());

// * storing varible and printing.
// let val = Return();
// console.log(val);

// ! first class function. - use function as values.


let values = function (val) {
    val();
}

values(function () {
    console.log("val is calling.")
})


// !higher order functions -- return function or accept a function.
// * its accepts function
function hof(val) {
    val();
}
hof(function () {
    console.log("function is accepting function.")
})


// * its not accepts function

function notReturn() {
    return function () {
        console.log("function is not accepting.")
    }
}

notReturn()(); //another bracket use another function.


console.log("Pure ve impure function");

// ! Pure - which is not changing outside values.
// ! impure function - which is changing outside values.


let a = 12;

function pure() {
    console.log("values is not affecting");
}

function impure() {
    return ++a;
}
console.log(impure());


console.log("Closures");
// ! Closures - one function which return an another function and that returned function is use parent function varible.

function parent() {
    let b = 12;
    return function () {
        console.log(++b);
    }
}

// Create a closure instance
let child = parent();
child();

// ! lexical scoping

console.log("lexical scoping");

function lexical() {
    let p = 1;
    function fun() {
        let q = 2;
        function fan() {
            let c = 3;
            console.log(p, q, c); // ✅ can access all
        }
        fan();
    }
    fun();
}
lexical();


// ! IIFS (immediately invoked function expressions).
console.log("IIFS (immediately invoked function expressions.");


(function () {
    console.log("using IIFS");
})();


// ! Hoisting - use before making. 

console.log("Hoisting ! ");

hoisting(); // * we can't use other languages.

function hoisting() {
    console.log("use before making. ||  we can't use other languages.")
}

// ! but if we use function expression it gives error only in function declaration. 


// ! usecases in problems.
console.log("usecases in problems.");