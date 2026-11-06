//! varibale declartion
let a = (10);
console.log(a)

//! variable annotation with number
let b: number = (10);
console.log(b);

//! variable annotation with string

let c: string = ("hello this is typescript")
console.log(c)


//! variable annotation with number and string

let d: (string | number)[] = ["hi from ts", 10]
console.log(d)


//! variable annotation with tuple

let e: [string, number, boolean][] = [["hello from ts", 100, true]]
console.log(e)

//! variable annotation with array of tuple
let f: [[number, string], [number, string]] = [[10, "Yashu"], [20, "Boss"]]
console.log(f);


//!programming questions base on array of tuples
let student: [string, number, boolean][] = [
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
}

console.log(student1)

//! object annotation with typescript

let studnet2: {
    name: string,
    age: number,
    isPassed: boolean
} = {
    name: "yashu",
    age: 22,
    isPassed: true
}

let employee: {
    name: string,
    id: number,
    salary: number,
    isActive: boolean
} = {
    name: "yashu",
    id: 22,
    salary: 20000,
    isActive: true

}

console.log(employee);


let studnet4: {
    name: string,
    age: number,
    address: {
        city: string,
        pincode: number
    }
} = {
    name: "yashu",
    age: 21,
    address: {
        city: "banglore",
        pincode: 560079
    }
}
console.log(studnet4)

//! programming on object array and function

let student3: {
    name: string,
    marks: number[];
    adress: {
        city: string,
        pincode: number
    }
    display: () => void;
} =
{
    name: "yashu",
    marks: [80, 90, 85],

    adress: {
        city: "Bangalore",
        pincode: 560079
    },
    display() {

    }
}
student3.display()

//! type aliyas
type Student = {
    name: string;
    age: number;
    isPassed: boolean;
};

let student5: Student = {
    name: "Yashu",
    age: 21,
    isPassed: true
};

let student2: Student = {
    name: "Rahul",
    age: 22,
    isPassed: false
};

console.log(student5);
console.log(student2);

//! type aliyas with function

type Student6 = {
    name: string;
    age: number;
    display1: () => void;
};

let student6: Student6 = {
    name: "Yashu",
    age: 21,

    display1() {
        // console.log("My name is " + this.name);
    }
};

student6.display1();


//!programming question

type Product = {
    name: string;
    price: number;
    quantity: number;
    totalPrice: () => number;
};

let product: Product = {
    name: "Laptop",
    price: 50000,
    quantity: 2,

    totalPrice() {
        return this.price * this.quantity;
    }
};

console.log(product);
console.log("Total Price:", product.totalPrice());