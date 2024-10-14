const container = document.querySelector(".container");
const box4 = document.querySelector(".box4");
const box3 = document.querySelector(".box3");
const box2 = document.querySelector(".box2");
const box1 = document.querySelector(".box1");
const box0 = document.querySelector(".box0");
const para = document.querySelector("p");

// // Bubbling
// para.addEventListener("click", (e) => {
//   console.log("p clicked");
// });

// box0.addEventListener("click", (e) => {
//   console.log("box0 clicked");
// });

// box1.addEventListener("click", (e) => {
//   console.log("box1 clicked");
// });

// box2.addEventListener("click", (e) => {
//   console.log("box2 clicked");
// });

// // Stop Propogation - Bubbling will stop here
// box3.addEventListener("click", (e) => {
//   e.stopPropagation()                        // this will stop propogation of the event here. Means stop bubbling anymore.
//   console.log("box3 clicked");
// });

// box4.addEventListener("click", (e) => {
//   console.log("box4 clicked");
// });

// container.addEventListener("click", (e) => {
//   console.log("container clicked");
// });

// window.document.body.addEventListener("click", (e) => {
//   console.log("Body Clicked");
// });

// window.document.addEventListener("click", (e) => {
//   console.log("Doc Clicked");
// });

// window.addEventListener("click", (e) => {
//   console.log("Win Clicked");
// });

// // Capturing  -  Bubbling ke ulta chalta hai, jese bubbling p se window tak aaraha tha, yeh window se p tak ayega. Means agar p per click hua tu yeh consider krega ke window, document, body sub per click hote hue p per bhi click hua hai.
para.addEventListener("click", (e) => {
    console.log("p clicked");
  }, true);                                   // we can write just true

box0.addEventListener("click", (e) => {
    e.stopPropagation()
  console.log("b0 clicked");
}, {capture: true});                          // or we can also write it in this form {capture: true}

box2.addEventListener("click", (e) => {
  console.log("b2 clicked");
}, {capture: false});

container.addEventListener("click", (e) => {
  console.log("con clicked");
}, {once: true});                              // {once: true} means it is clickable only once.



// // Diff b/w Bubbling and Capturing:
// // Bubbling: Jis event per click hua us se upar jaate jaate window tak phonch jaata hai.
// // Capturing: Window se hote hue document aur phir niche aate aate jis event per click hua wahan tak phonch jaata hai.