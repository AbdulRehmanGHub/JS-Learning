// // Square Pattern
// let i, j;

// for (i = 1; i < 4; i++) {
//   for (j = 1; j < 6; j++) {
//     document.write("*");
//   }
//   document.write("*", "<br />");
// }

// // Angle Pattern
// let i, j;

// for (i = 1; i <= 5; i++) {
//   for (j = 1; j <= i; j++) {
//     document.write("*");
//   }

//   document.write("<br/>");
// }

// // Reverse Angle Pattern
// let i, j, k;
// let x = 5;

// for (i = 1; i <= x; i++) {
//   for (k = 1; k <= x - i; k++) {
//     document.write("&nbsp;&nbsp;");
//   }
//   for (j = 1; j <= i; j++) {
//     document.write("*");
//   }
//   document.write("<br/>");
// }

// // Triangle Pattern
// let display = document.querySelector(".display");
// let i, j, k, l;
// star = "";

// for (i = 1; i <= 5; i++) {
//   for (k = 1; k <= 5 - i; k++) {
//     star += "&nbsp;&nbsp;";
//   }
//   for (j = 1; j <= i; j++) {
//     star += "*";
//   }

//   for (l = 2; l <= i; l++) {
//     star += "*";
//   }

//   star += "<br/>";

//   display.innerHTML = star;
// }

// // Triangle Pattern - Concise way
// let display = document.querySelector(".display");
// let i, j, k, l;
// let x = 5;
// let star = "";
// let space = "&nbsp;&nbsp;";

// for (i = 1; i <= x; i++) {
//   for (k = 1; k <= x - i; k++) {
//     star += space;
//   }
//   for (j = 1; j <= i; j++) {
//     star += "*";
//   }

//   for (l = 2; l <= i; l++) {
//     star += "*";
//   }

//   star += "<br/>";

//   display.innerHTML = star;
// }

// // Triangle Pattern - Concise way 2
// let display = document.querySelector(".display");
// let i, j, k;
// let l = 1;
// let x = 5;
// let star = "";
// let space = "&nbsp;&nbsp;";

// for (i = 1; i <= x; i++) {
//   for (k = 1; k <= x - i; k++) {
//     star += space;
//   }

//   for (j = 1; j <= l; j++) {
//     star += "*";
//   }

//   star += "<br/>";
//   l += 2;

//   display.innerHTML = star;
// }

// // Reverse Triangle Pattern
// let display = document.querySelector(".display");
// let i, j, k, l;
// let x = 5;
// let star = "";
// let space = "&nbsp;&nbsp;";

// for (i = 5; i >= 1; i--) {
//   for (k = 1; k <= x - i; k++) {
//     star += space;
//   }

//   for (j = 1; j <= i; j++) {
//     star += "*";
//   }

//   for (l = 1; l <= i - 1; l++) {
//     star += "*";
//   }

//   star += "<br/>";

//   display.innerHTML = star;
// }

// // Reverse Triangle Pattern - Concise Method
// let display = document.querySelector(".display");
// let x = 5;
// let i, j, k, l;
// l = x * 2;
// l = l - 1;
// let star = "";
// let space = "&nbsp;&nbsp;";

// for (i = x; i >= 1; i--) {
//   for (k = 1; k <= x - i; k++) {
//     star += space;
//   }

//   for (j = 1; j <= l; j++) {
//     star += "*";
//   }

//   l -= 2;

//   star += "<br/>";

//   display.innerHTML = star;
// }

// // Diamond Pattern
// // all the program is same triangle and reverse triangle
// let display = document.querySelector(".display");
// let i, j, k;
// let l = 1;
// let x = 5;
// let star = "";
// let space = "&nbsp;&nbsp;";

// for (let i = 1; i <= x; i++) {
//   for (let k = 1; k <= x - i; k++) {
//     star += space;
//   }

//   for (let j = 1; j <= l; j++) {
//     star += "*";
//   }

//   star += "<br/>";
//   l += 2;
// }
// // // just added -1 here.
// for (i = x - 1; i >= 1; i--) {
//   for (k = 1; k <= x - i; k++) {
//     star += space;
//   }

//   for (j = 1; j <= i; j++) {
//     star += "*";
//   }

//   for (l = 1; l <= i - 1; l++) {
//     star += "*";
//   }

//   star += "<br/>";
// }

// display.innerHTML = star;

// // Flip Diamond Pattern / Sand Time JAR / Squeezed Bottle
// // place the last for loop as first and first as last. Also some changes.
let display = document.querySelector(".display");
let i, j, k;
let l = 1;
let x = 5;
let star = "";
let space = "&nbsp;&nbsp;";

for (i = x; i >= 1; i--) {
  for (k = 1; k <= x - i; k++) {
    star += space;
  }

  for (j = 1; j <= 2 * i - 1; j++) {
    star += "*";
  }

  star += "<br/>";
}

for (i = 2; i <= x; i++) {
  for (k = 1; k <= x - i; k++) {
    star += space;
  }

  for (j = 1; j <= 2 * i - 1; j++) {
    star += "*";
  }

  star += "<br/>";
  l += 2;
}

display.innerHTML = star;

// // new pattern here