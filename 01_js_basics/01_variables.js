// T1:
// console.log("Abdul Rehman")

// T2:
const stName = "Abdul Rehman"       // for constant variables that can't be change.
let cityName = "Abbottabad"         // commonly use in Modern JS.
var uniName = "VU"                  // not commonly use because of scope issues.
rollNumber = "ABC123"               // not a good practice to use without defining the method.

// stName = "xyz"                   // this will show undefined because we haven't assign any value to it

cityName = "Lahore"

/*
Note: mostly developers avoid to use var for declaring variables because of block scope and functional scope problem.
Instead of var we can use let for declaring variables.
*/

// console.log(stName);
console.table([stName, cityName, uniName, rollNumber]);             // Showing many variabls or constants in a table format.
