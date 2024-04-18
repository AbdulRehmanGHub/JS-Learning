// T3:
"use strict";       // treat all JS code as newer version

// alert( 10 + 5);     // we can use the alert in browser but not in Node Js terminal. For this we have another method.

console.log(4 - 9);    // Good practice

// Bad practices -- The code will run but the code is not readable for others. Avoid to use.
/*
console.log(2
    +
    5);

console.log(4+4); console.log(10-5);
*/

// T4:
let name = "Abdul";
let age = 23;
let isLoggedIn = true;
let state = null;

// number       =>  range is 2^53
// bigint       =>  use for a large numbers/data like in stocks etc
// string       =>  use for characters and in "double quotes" or  'single quotes'
// boolean      =>  either 0 or 1 / true or false
// null         =>  standalone value -- the value is defined but it's empty
// undefined    =>  value not defined
// symbol       =>  unique

// object

// T5:
console.log(typeof 22);                     // shows number
console.log(typeof "hi, I'm Abdul");        // string
console.log(typeof null);                   // object
console.log(typeof undefined);              // undefined