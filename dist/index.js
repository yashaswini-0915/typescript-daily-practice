"use strict";
//! varibale declartion
let a = (10);
console.log(a);
//! variable annotation with number
let b = (10);
console.log(b);
//! variable annotation with string
let c = ("hello this is typescript");
console.log(c);
//! variable annotation with number and string
let d = ["hi from ts", 10];
console.log(d);
//! variable annotation with tuple
let e = [["hello from ts", 100, true]];
console.log(e);
//! variable annotation with array of tuple
let f = [[10, "Yashu"], [20, "Boss"]];
console.log(f);
//!programming questions base on array of tuples
let student = [
    ["Yashu", 22, true],
    ["Rahul", 21, false],
    ["Priya", 20, true]
];
console.log(student);
//!object
let student1 = {
    name: "yashhu",
    age: 10,
    isPassed: true
};
console.log(student1);
//! object annotation with typescript
let studnet2 = {
    name: "yashu",
    age: 22,
    isPassed: true
};
let employee = {
    name: "yashu",
    id: 22,
    salary: 20000,
    isActive: true
};
console.log(employee);
let studnet4 = {
    name: "yashu",
    age: 21,
    address: {
        city: "banglore",
        pincode: 560079
    }
};
console.log(studnet4);
//! programming on object array and function
let student3 = {
    name: "yashu",
    marks: [80, 90, 85],
    adress: {
        city: "Bangalore",
        pincode: 560079
    },
    display() {
    }
};
student3.display();
let student5 = {
    name: "Yashu",
    age: 21,
    isPassed: true
};
let student2 = {
    name: "Rahul",
    age: 22,
    isPassed: false
};
console.log(student5);
console.log(student2);
let student6 = {
    name: "Yashu",
    age: 21,
    display1() {
        // console.log("My name is " + this.name);
    }
};
student6.display1();
let product = {
    name: "Laptop",
    price: 50000,
    quantity: 2,
    totalPrice() {
        return this.price * this.quantity;
    }
};
console.log(product);
console.log("Total Price:", product.totalPrice());
