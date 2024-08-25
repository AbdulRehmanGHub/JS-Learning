// average of numbers
function averageOfNumbers(a, b, c) {
  // console.log((a+b+c)/3);        // 20

  let avg = (a + b + c) / 3;
  console.log(avg); // 20
}
// averageOfNumbers(10, 20, 30);

// table of a number
function multiplyTable(n) {
  console.log("------------"); // optional line
  console.log("Table of", n); // optional line
  for (let i = 1; i <= 10; i++) {
    // method 1
    console.log(n, "x", i, "=", n * i);
  }

  //   for (let i = 0; i <= n * 10; i += n) {         // method 2
  //     console.log(i);
  //   }
}
// multiplyTable(2);
// multiplyTable(5);

// return in functions

function sumOfNumbers(a, b) {
  return a + b;
}

// console.log(sumOfNumbers(2, 5));                // result
// console.log(sumOfNumbers(sumOfNumbers(10, 20), 50));          // sum of 3 numbers with the same func

// more on returns

// function newFunc(a, b) {
//   console.log(a + b);
//   console.log(a - b);
//   return a; // below from return will not be working...
//   console.log(a + b);
//   console.log(a - b);
// }
// newFunc(10, 20);

// function to return sum from 1 to n   ---   like 1+2+3+4+5....n
function sum1toN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = (sum + i);
  }
  return sum;
};

console.log(sum1toN(5));