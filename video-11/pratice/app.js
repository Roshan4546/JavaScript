// let DATA = "secret Imformation";
// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData() {
//         console.log("data = ", DATA);
//     }
// }


// let std1 = new User("Roshan", "roshan@gmail.com");
// let std2 = new User("Roshan", "roshan@gmail.com");
// let std3 = new User("Roshan", "roshan@gmail.com");


// class admin extends User {
//     constructor(name, email) {
//         super(name,email);

//     }
//     editdata() {
//         DATA = "Some new value";
//     }
// }


// let admin1 = new admin("admin", "admin@email.com");


let a = 10;
let b = 20;

console.log("a =", a);
console.log("b =", b);
console.log("a + b =", a + b);

try {
    // This will throw ReferenceError because 'c' is not defined
    console.log("a / c =", a / c);
} catch (err) {
    console.log("Error:", err.message);
}

// The following operations will also throw ReferenceError if 'c' is not defined
try {
    console.log("a - b =", a - b);
    console.log("a * b =", a * b);
    console.log("a / c =", a / c);
    console.log("a % b =", a % b);
} catch (err) {
    console.log("Error:", err.message);
}
