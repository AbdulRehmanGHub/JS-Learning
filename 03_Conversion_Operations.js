// T6: P1 -- for num values
let score = "83"

// console.log(typeof score);
console.log(typeof (score));       // we can use both methods of typeof

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);


// T6: P2 -- for string values
let stName = 25;
console.log(typeof stName);

let valueInString = String(stName);

console.log(typeof valueInString);
console.log(valueInString);

// T6: P3 -- for boolean values
let remarks = 1;                  
console.log(typeof remarks);

let valueInBoolean = Boolean(remarks);

console.log(typeof valueInBoolean);
console.log(valueInBoolean);

/*for null -- the value that will be shown is 0
for undefined -- the value that will be shown is NaN
for other values like we are providing the string value and converting in numbers, so it will be shown to us NaN.

like in our case:
"55" => 55
"55abc" => NaN
true => 1 and false => 0,  "abdul" => true and "" => false
*/