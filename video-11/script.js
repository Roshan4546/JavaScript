// ! classes and objects

// ? Object
// A javaScript object is an entity having state and behavior.
// js object have a special property called prototype.
// we acn set prototype using __proto__ property  //! refernece to another object.


const student = {
    name: "Roshan",
    age: 20,
    sec: "H",
    cgpa: 8.5,
    printMark: function () {
        console.log("mark = ", this.cgpa); // ? student.cgpa
    }
};

const employe = {
    calTax() {
        console.log("tax rate is 10%.");
    },
};

const Roshan = {
    salary: 100000,
    calTax() {
        console.log("tax rate is 20%.");
        //! if object and protoype have same method, then object method will be called. 
    }
};

Roshan.__proto__ = employe; // ? Roshan.__proto__ = employe


// ! class in js

// ? class is a program-code template for creating objects.
// Those objetcs will have some state (varible) and some behavior (function) inside it.


// ! it is a blueprint of object.



class car  {
    constructor() {
        console.log("Creating new Object.");
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }
    setBrand(brand) { // ? this is a varible argument property.
        this.brandName = brand; // ? this (this) is objects property.
    }
};

let BMW = new car(); // constuctor invoke.

// console.log(typeof BMW);

// BMW.start();
// BMW.stop();


let M3 = new car();
M3.setBrand("BMW");


// ! constructor

// ? it is method. it use initialize the object.


// !inheritance

// ? inheritance is passing down properties and method from parent class to child class.

// Todo if child and parent have same method , child's method will be used. [method overrighting].

class parent{
    hello() {
        console.log("hello");
    }
}


class child extends parent{ }


let obj = new child();

class person{
    constructor() {
        this.specis = "homo sapines";
    }
    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }
    work() {
        console.log("do nothing"); // ** method over writing.
    }
}


class engineer extends person{
    work() {
        console.log("solve problems, bulid something.");
    }
}

let rohan = new engineer();


// ! Super keyword

// ? THis super keyword is used to call the constructor of its parent classs to access the parent's propertirs and method.

class class12 {
    constructor() {
        this.className = 12;
        console.log("Enter parent constuctor");
    }

    section() {
        console.log("12th class");
    }
}

class student1 extends class12{
    
    constructor() {
        console.log("enter child constructor")
        super(); // to invoke parent constructor.
        this.branch = "IT"; 
        console.log("exit chod constrictor.")
    }

    RollNo() {
        console.log("720");
    }
}

let rocky = new student1("IT sction");