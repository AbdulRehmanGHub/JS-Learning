//   // Promise
//   let val = new Promise((res, rej) => {
//     if (fasle) {
//       return res();
//     } else {
//       return rej();
//     }
//   });

//   val
//     .then(function () {
//       console.log("ok");
//     })
//     .catch(function () {
//       console.log("error");
//     });

//   // Promise Qs 1 - user ask for a number b/w 0-10. Upto 5 reject and more will resolve

//   let user_que = new Promise((resolve, reject) => {
//     let num = Math.floor(Math.random() * 11);
//     console.log(num);

//     if (num > 5) {
//       return resolve();
//     } else if (num <= 5) {
//       return reject();
//     }
//   });

//   user_que
//     .then(function () {
//       console.log("Query Resolved");
//     })

//     .catch(function () {
//       console.log("Query Rejected");
//     });

//   // Promise Qs 2 - Daily routine tasks
//   // Get up in monring
//   // Ready for school
//   // Do breakfast
//   // Enter in the school
//   // Way back to home
//   // Have a launch
//   // When night, sleep

//   let dailyTasks = new Promise(function (res, rej) {
//     return res("Get up in morning");
//   });

//   let t2 = dailyTasks.then(function (data) {
//     console.log(data);

//     return new Promise(function (res, rej) {
//       return res("Ready for school");
//     });
//   });

//   let t3 = t2.then(function (data) {
//     console.log(data);

//     return new Promise(function (res, rej) {
//       return res("Do breakfast");
//     });
//   });

//   let t4 = t3.then(function (data) {
//     console.log(data);

//     return new Promise(function (res, rej) {
//       return res("Enter in the school");
//     });
//   });

//   let t5 = t4.then(function (data) {
//     console.log(data);

//     return new Promise(function (res, rej) {
//       return res("Way back to home");
//     });
//   });

//   let t6 = t5.then(function (data) {
//     console.log(data);

//     return new Promise(function (res, rej) {
//       return res("Have a launch");
//     });
//   });

//   let t7 = t6.then(function (data) {
//     console.log(data);

//     return new Promise(function (res, rej) {
//       return res("When night, sleep");
//     });
//   });

//   let error = t7.then(function (data) {
//     console.log(data);

//     return new Promise(function (res, rej) {
//       return rej("Rejected");
//     });
//   });

//   error.catch(function (data) {
//     console.log(data);
//   });

//   // FETCH API through FETCH, THEN METHOD
//   let imgg = document.querySelector(".pic img");
//   let divv = document.querySelector(".details");

//   function userData() {
//     fetch("https://randomuser.me/api/")
//       .then(function (raw) {
//         return raw.json();
//       })
//       .then(function (data) {
//         let fullDetails = data.results[0].location.street.name;
//         let pic = data.results[0].picture.large;

//         console.log(fullDetails);

//         divv.innerHTML = fullDetails;

//         imgg.setAttribute("src", `${pic}`);
//       });
//   }

//   userData();

//   // Number 2 - Fetch, then
//   function uData() {
//     fetch("https://dummyjson.com/quotes")
//       .then(function (raw) {
//         return raw.json();
//       })
//       .then(function (data) {
//         console.log(data);

//         let newQuote = data.quotes;
//         console.log(newQuote);

//         newQuote.forEach((elem) => {
//           let q = elem.quote;
//           divv.innerHTML += `<p>${q}</p>`;
//         });
//       });
//   }

//   uData();

//   // FETCH API through ASYNC, AWAIT METHOD
//   async function dailyQuote() {
//     let raw = await fetch("https://dummyjson.com/quotes");
//     let ans = await raw.json();
//     // console.log(ans);

//     let quotes = ans.quotes;

//     quotes.forEach(function (elem) {
//       // console.log(elem.quote);
//       let q = elem.quote;
//       let id = elem.id;

//       divv.innerHTML += `<p>${id} <br> ${q}</p>`;
//     });
//   }

//   dailyQuote();

//   // Summary
//   // 1 - PROMISE
// let t1 = new Promise(function (res, rej) {
//   return res("task 1");
// });

// t2 = t1.then(function (output) {
//   console.log(output);

//   return new Promise(function (res, rej) {
//     return res("task 2");
//   });
// });

// t3 = t2.then(function (output) {
//   console.log(output);
//   return new Promise(function (res, rej) {
//     return res("task 3");
//   });
// });

// t3.then(function (output) {
//   console.log(output);
//   return new Promise(function (res, rej) {
//     return res("task 4");
//   });
// });
//   // // Promise - and so on for other tasks


//   // 2 - FETCH, THEN

//   function abc() {
//     fetch("api link")
//       .then(function (raw) {
//         return raw.json();
//       })
//       .then(function (data) {
//         console.log(data);
//       });
//   }
//   abc();


//   // 3 - ASYNC, AWAIT

//   async function abc() {
//     let raw = await fetch("api link");
//     let ans = await raw.json();
//     console.log(ans);
//   }

//   abc();
