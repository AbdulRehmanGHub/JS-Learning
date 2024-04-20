// T14:

let myDate = new Date();
// console.log(myDate);                                // output:  2024-04-20T07:43:41.687Z
// console.log(myDate.toDateString());                 // output:  Sat Apr 20 2024
// console.log(myDate.toString());                     // output:  Sat Apr 20 2024 12:43:41 GMT+0500 (Pakistan Standard Time)
// console.log(myDate.toLocaleString());               // output:  20/04/2024, 12:43:41 pm
// console.log(myDate.toLocaleDateString());           // output:  20/04/2024
// console.log(myDate.toLocaleTimeString());           // output:  12:46:19 pm
// console.log(myDate.toJSON());                       // output:  2024-04-20T07:50:53.393Z

// console.log(typeof Date);                           // function
// console.log(typeof myDate);                         // object
 
// let myBirthDay = new Date(2000, 0, 30);
// console.log(myBirthDay.toDateString());

// const myBirthDay = new Date(2000, 0, 30, 12, 20, 0);
// console.log(myBirthDay.toLocaleString());

let myClassTime = new Date("20-04-2024")
console.log(myClassTime.toLocaleString());


