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

// let myClassTime = new Date("04-24-2024")
// console.log(myClassTime.toLocaleString());

// let myTimeStamp = Date.now();

// console.log(myTimeStamp);                               // output like this:  1713721208969
// console.log(myClassTime.getTime());                     // output like this:  1713898800000
// console.log(Math.floor(Date.now() / 1000));             // output like this:  1713721150


let todayDate = new Date();
console.log(todayDate.getMonth());                          // output:  3 -- 0 based index
console.log(todayDate.getFullYear());                       // output:  2024
console.log(todayDate.getDate());                           // output:  21