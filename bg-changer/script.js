// // Method 1:

// let green = document.querySelector(".box:nth-child(1)");
// let orange = document.querySelector(".box:nth-child(2)");
// let yellow = document.querySelector(".box:nth-child(3)");

// green.addEventListener("click", () => {
//   document.body.style.backgroundColor = "green";
// });

// orange.addEventListener("click", () => {
//   document.body.style.backgroundColor = "orange";
// });

// yellow.addEventListener("click", () => {
//   document.body.style.backgroundColor = "yellow";
// });

// // Method 2:
let box = document.querySelectorAll(".box");

box.forEach((b) => {
  b.addEventListener("click", (bx) => {
    if (bx.target.innerText === "Green") {
      document.body.style.backgroundColor = "green";
    } else if (bx.target.innerText === "Orange") {
      document.body.style.backgroundColor = "orange";
    } else if (bx.target.innerText === "Yellow") {
      document.body.style.backgroundColor = "yellow";
    }
  });
});

// // Method 3:

// box.forEach((b) => {
//   b.addEventListener("click", (bx) => {
//     let color = bx.target.id;
//     switch (color) {
//       case "yellow":
//         document.body.style.backgroundColor = "yellow";
//         break;

//       case "green":
//         document.body.style.backgroundColor = "green";
//         break;

//       case "orange":
//         document.body.style.backgroundColor = "orange";
//         break;

//       default:
//         document.body.style.backgroundColor = "white";
//         break;
//     }
//   });
// });
