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


// T7: Operations
// P1: basics
// console.log(5 + 2);         // for addition
// console.log(5 - 7);         // for subtraction
// console.log(5 * 3);         // for multiplications
// console.log(5 / 10);        // for division
// console.log(5 % 5);         // for remainder
// console.log(5 ** 3);        // for power

// P2: Best Learning
let str1 = "Hi,";
let str2 = " Abdul Rehman";
let str3 = str1 + str2;

console.log(str3);

// P3: Learning More with tricky conversions
console.log("1" + 4);
console.log(1 + "4" + "3");
console.log(1 + 4 - "9");
console.log("1" + 4 + 9);

// console.log(3 + 4 * 5 % 3);          // It's not recommended to write this type of code. It's make complexity for readers. Make it easy in different parenthesis.

// console.log(true);           // result will be true
// console.log(+true);          // result will be 1
// console.log(+"");            // result will be 0, but not recommend to use. Why making our code complex

// P4: Not recommended to use this type of complexity
let num1, num2, num3
num1 = num2 = num3 = 2 + 2;
console.log(num1);
console.log(num1, num2, num3);