// T12: Numbers
const points = 1000;             // output: 100
console.log(points);

const marks = new Number(1000);      // output [Number: 100] -- run this in console for more info and functions, protos etc.
console.log(marks);

console.log(marks.toString().length);       // length of the numbers, which is 4 in this case (1000), for 100 it will show 3.
console.log(marks.toFixed(2));              // If our value is 1000, after adding toFixed(), it will be shown 1000.00

const moneyCount = 150.00;
console.log(moneyCount.toPrecision(4));         // output: 150.0, if we give it 7 then it gives result = 150.0000

const bankBalance = 25000000000;
console.log(bankBalance.toLocaleString('en-IN'));


// T13: Maths
console.log(Math);

console.log(Math.abs(-4));          // convert negative to positve
console.log(Math.sqrt(25));         // restult = 5

console.log(Math.min(9.5, 10.3, 5.1, 1.2));         // result = 1.2
console.log(Math.max(9.5, 10.3, 5.1, 1.2));         // result = 10.3

console.log(Math.floor(23.95));         // output = 23
console.log(Math.ceil(35.12));          // output = 36

console.log(Math.random());                              // give random num between 0 and 1.
console.log((Math.random() * 10) + 1);                   // it will convert num between 1 and 10.
console.log((Math.floor(Math.random() * 10) + 1));        // it will remove the decimal and give exact a number.


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
