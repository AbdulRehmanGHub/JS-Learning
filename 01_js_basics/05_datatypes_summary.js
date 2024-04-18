// T9:
/* 
Basically, there are 2 types of datatypes => Primitive and Non-Primitive(Reference type)
7 = Primitive =>        String, Number, Boolean, Null, Undefined, Symbol, BigInt.
3 = Non-Primitive =>    Array, Object, Function.
*/

// P1: Primitive Data Types
const marks = 90;               // number
const totalMarks = 100.00;      // number in decimal

const isLoggedIn = false;       // boolean
const outsideTemp = null;       // null
let userEmail;                  // undefined or we can also write let email = undefinded;

const id1 = Symbol('12345');      // symbol
const id2 = Symbol('12345');
// console.log(id1 === id2);         // it will return false

const bigNumber = 3478477888888888888877n;        // bigint, at last we added n and it became bigInt now.
// console.log(typeof bigNumber)                // it will return bigint


// P2: Non-Primitive Data Types
// Array
const techCompany = ["Dell", "Microsoft", "HP", "Google", "Lenovo", "Acer", "Samsung"];
console.log(techCompany[2]);

// Object
let stRecord = {
    Name: "Abdul Rehman",
    Age: 23,
    City: "Abbottabad",
    Degree: "BSCS",
    Year: 4,
    University: "VU"
}
console.log(stRecord['Degree']);

// Function
const myFunction = function(){
    console.log("Hi, this is function!");
}
myFunction();

// P3: Check Data Type of any value
// console.log(typeof stRecord);          // it will return object
// console.log(typeof myFunction);        // it will return function
// console.log(typeof techCompany);       // it will return object
// console.log(typeof bigNumber);         // it will return bigint
// console.log(typeof totalMarks);        // it will return number
// console.log(typeof marks);             // it will return number
// console.log(typeof isLoggedIn);        // it will return boolean
// console.log(typeof outsideTemp);       // it will return object
// console.log(typeof userEmail);         // it will return undefined
// console.log(typeof id1);               // it will return symbol

