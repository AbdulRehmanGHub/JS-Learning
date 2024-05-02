// // T25: Scopes    -- {}  it is scope, when it's comes with functions, if else statements, loops etc.
// //                   {}  with object is not scope, it's object declaration.

let a = 100;
const b = 200;
var c = 300;

// console.log(a);
// console.log(b);
// console.log(c);
// // Uptill now it's working well.

// // The problem comes when we declare var in some scope. Like
if(true){
    let x = 100;
    const y = 200;
    var z = 300;
}

// console.log(x);                  // It is showing Error -- x is undefined because we defined it inside the if statement -- This is good because we can only access the inside values only inside.
// console.log(y);                  // It is showing Error -- y is undefined because we defined it inside the if statement -- This is good because we can only access the inside values only inside.
// console.log(z);                  // The problem comes here with var, we defined it inside but it is giving output by using it outside of the if statement. That's why we avoid to use var in JS.


// // One more example, let's say we declare the let, const, var outside(global scope) and inside(local/block scope).
let name = "abdul";
const id = 123;
var age = 19;
school = "VU Outside";

if(true){
    let name = "rehman";
    const id = 1010;
    var age = 20;
    school = "VU Inside";

//     console.log("inside name: ", name);             // output: rehman
//     console.log("inside id: ", id);                 // output: 1010
//     console.log("inside age: ", age);               // output: 20
//     console.log("inside school:", school);          // output: VU
}

// console.log("outside name: ", name);                // output: abdul
// console.log("outside id: ", id);                    // output: 123
// console.log("outside age: ", age);                  // output: 20, which is not correct. It's basically giving the result of inside/block scope which is 20. So, we should avoid using var.
// console.log("outside school: ", school);            // output: VU Inside, which is not correct. It's basically giving the result of inside/block scope which is VU Inside. So, we should not declare it without variable type like const or let.

// // Same is the case if we use in the loops, or functions etc. Like see the simple example
var abc = 100;
console.log(abc);               // it's showing 200 here which is correct.

for (i = 0; i <1; i++) {
    var abc = 200;
    console.log(abc)            // showing 200. Which is correct.
}
console.log(abc);               // Showing here 200 also whichc is wrong. Because now it's showing the value of inside function / loop.
