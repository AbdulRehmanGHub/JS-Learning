// Math in JS
// Math popular objects

console.log(Math.PI);       //  fixed value 3.141592653589793
console.log(Math.E);        //  fixed value 2.718281828459045


// Math popular methods

console.log(Math.abs(-2));      // removes signs (neg, pos) from value  == 2
console.log(Math.pow(2, 3));    // expontentiation 2 power 3 = 8
console.log(Math.floor(5.6));   // roundoff the value to lower limit   == 5
console.log(Math.ceil(5.6));    // roundoff the value to higher limit  == 6
console.log(Math.round(5.2));   // roundoff the value to lower and higher limit  == 6
console.log(Math.random());     // generate a random value between 0 and 1 in decimal numbers.

// generate random integer
// all are almost same
console.log(Math.round(Math.random()*10) + 1);      // generate number between 1 - 11
console.log(Math.floor(Math.random()*10) + 1);      // generate number between 1 - 10
console.log(Math.ceil(Math.random()*10) + 1);       // generate number between 1 - 11

// generate number between 1 - 100
console.log(Math.floor(Math.random()*100) + 1);      // generate number between 1 - 100

// generate number between 20 - 25
console.log(Math.ceil(Math.random()*5) + 20);      // generate number between 20 - 25


