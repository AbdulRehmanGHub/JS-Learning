// // FETCH API through FETCH, THEN METHOD
let imgg = document.querySelector(".pic img");
let divv = document.querySelector(".details");

// function userData(){
//     fetch('https://randomuser.me/api/')
//     .then(function(raw){
//         return raw.json();
//     })
//     .then(function(data){
//         let fullDetails = data.results[0].location.street.name;
//         let pic = data.results[0].picture.large;

//         console.log(fullDetails);

//         divv.innerHTML = fullDetails;

//         imgg.setAttribute('src', `${pic}`);
//     });
// };

// userData();

// // Number 2 - Fetch, then
// function uData(){
//     fetch('https://dummyjson.com/quotes')
//     .then(function(raw){
//         return raw.json();
//     })
//     .then(function(data){
//         console.log(data);

//         let newQuote = data.quotes;
//         console.log(newQuote);

//         newQuote.forEach((elem)=>{
//             let q = elem.quote;
//             divv.innerHTML += `<p>${q}</p>`;
//         })

//     });
// };

// uData();

// // FETCH API through ASYNC, AWAIT METHOD
async function dailyQuote() {
  let raw = await fetch("https://dummyjson.com/quotes");
  let ans = await raw.json();
  // console.log(ans);

  let quotes = ans.quotes;

  quotes.forEach(function (elem) {
    // console.log(elem.quote);
    let q = elem.quote;
    let id = elem.id;

    divv.innerHTML += `<p>${id} <br> ${q}</p>`;
  });
}

dailyQuote();
