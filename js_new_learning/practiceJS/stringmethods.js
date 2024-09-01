//
let myName = "                       abdul             ";
myName.trim().toUpperCase();

console.log(myName);
console.log(myName.trim().toUpperCase());

//
let months = ['jan', 'july', 'march', 'aug'];
let delMonth = months.shift();

console.log(delMonth);
console.log(months);

//
months.unshift('june');
console.log(months);


//
let start = ['jan', 'july', 'march', 'aug'];
let end = start.shift();

console.log(start);
console.log(end);

//
let newArray = ['jan', 'july', 'march', 'aug'];
let finalArray = newArray.splice(0, 2, "july", "june");

console.log(newArray);
console.log(finalArray);

