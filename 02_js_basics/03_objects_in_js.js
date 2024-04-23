// T18:
// Singleton  == object.create -- if make with constructor is a singleton, we will use it later.
// Literals -- not singleton, first we will use it.

const jsUser = {
    "First Name": "Abdul Rehman",
    age: 23,
    email: "abdul.rehman1@studentambassadors.com",
    location: "Abbottabad, Pakistan",
    isLoggedIn: false,
    lastLoginDays: "Monday, Friday"
};

// 2 ways to print objects
console.log(jsUser.email);              // 1st method -- by dot method
console.log(jsUser["email"]);           // 2nd method -- by square brackets [], for names like Full Name, First Name, Full Address etc which includes space in between.

console.log(jsUser["First Name"]);      // we can access the first name only by this method because it has 2 words like First and Name.

// P2:
// using symbol in object
const mySym = Symbol("mykey1");
const mySym1 = Symbol("mykey2");

const jsUser1 = {
    name: "Abdul Rehman",
    mySym: "mykey1",                    // Not a way of writing a symbol.
    [mySym1]: "mykey2",                  // Proper way of writing a symbol.
    country: "Pakistan"
}

console.log(jsUser1.mySym);             // this will print mykey1 which is good. But the problem is it's not a symbol.
console.log(typeof jsUser1.mySym);      // output: string

console.log(jsUser1[mySym1]);            // Correct method to access the symbol in objects.
console.log(typeof jsUser1[mySym1]);     // output: symbol

