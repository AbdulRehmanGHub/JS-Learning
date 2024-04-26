// // T18:
// // Singleton  == object.create -- if make with constructor is a singleton, we will use it later.
// // Literals -- not singleton, first we will use it.

// const jsUser = {
//     "First Name": "Abdul Rehman",
//     age: 23,
//     email: "abdul.rehman1@studentambassadors.com",
//     location: "Abbottabad, Pakistan",
//     isLoggedIn: false,
//     lastLoginDays: "Monday, Friday"
// };

// // 2 ways to print objects
// console.log(jsUser.email);              // 1st method -- by dot method
// console.log(jsUser["email"]);           // 2nd method -- by square brackets [], for names like Full Name, First Name, Full Address etc which includes space in between.

// console.log(jsUser["First Name"]);      // we can access the first name only by this method because it has 2 words like First and Name.

// // P2:
// // using symbol in object
// const mySym = Symbol("mykey1");
// const mySym1 = Symbol("mykey2");

// const jsUser1 = {
//     name: "Abdul Rehman",
//     // mySym: "mykey1",                    // Not a way of writing a symbol.
//     mySym1: "mykey2",                  // Proper way of writing a symbol.
//     country: "Pakistan"
// }

// // console.log(jsUser1.mySym);             // this will print mykey1 which is good. But the problem is it's not a symbol.
// console.log(typeof jsUser1.mySym);      // output: string

// console.log(jsUser1[mySym1]);            // Correct method to access the symbol in objects.
// console.log(typeof jsUser1[mySym1]);     // output: symbol

// jsUser1.name = "User1"

// // freeze method -- this will freeze the object here and will not continue further changes etc.
// Object.freeze(jsUser1)
// jsUser1.name = "User2";         // these changes will not occur because we have freeze the object.
// console.log(jsUser1);

// // Note: Functions -- In Js, we can use functions like variable, there is no descriminations.

const teacherRecord = {
    name: "Teacher 1",
    age: 40,
    degree: "MS",
    city: "Lahore",
    scale: 19
}

// teacherRecord.greeting = function() {
//     console.log("Hello, I'm Teacher!");
// }

// console.log(teacherRecord.greeting);            
// console.log(teacherRecord.greeting());          

teacherRecord.geetingTwo = function() {
    console.log("Hello!");
    console.log(`Hello!, my name is ${this.name} and my age is ${this.age}`);           // using String manipulations and this method.
}

console.log(teacherRecord.geetingTwo);
console.log(teacherRecord.geetingTwo());

