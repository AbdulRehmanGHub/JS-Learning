/*

Basically there are 2 types of memory allocations
Stack (Primitive)           // this will make copy of our datatype and return value.
Heap (Non-Primitive)        // this will make original reference of our value. Heap will not create copy.
*/

// the stack data will stored in stack one by one.
let myAge = 23;
let myAge1 = myAge;

myAge1 = 24;

console.log(myAge);
console.log(myAge1);

// the object data will be stored in heap.

let student1 = {
    name: "Abdul Rehman",
    rollNum: 1000,
    University: "VU",
    City: "Abbottabad"
}

// let student2 = {
//     name: "Kashan",
//     rollNum: 1005,
//     University: "VU",
//     City: "Abbottabad"
// }

// let student3 = {
//     name: "Haseeb",
//     rollNum: 1010,
//     University: "VU",
//     City: "Lahore"
// }

let student2 = student1

student2.name ="Hasi";
student2.rollNum = 1005;

console.log(student1);
console.log(student2);