// const imgs = document.querySelector("img");
//
// // Through Fetch API
// fetch("https://api.thecatapi.com/v1/images/search?limit=10")
//   .then((res) => res.json())
//   .then((data) => {
//     data.forEach((imag) => {
//       catImg = imag.url;

//       let photo = document.createElement("img");
//       photo.className = "imgg";
//       photo.src = `${catImg}`;

//       document.body.append(photo);
//     });
//   });


// // XML HTTP Request - This is a very old method of fetching data. Rarely used nowadays.
// const xhr = new XMLHttpRequest();
// xhr.responseType = "json";

// xhr.onload = () => {
//   xhr.response.forEach((element) => {
//     let imgUrl = element.url;
//     let img = document.createElement("img");
//     img.src = imgUrl;
//     document.body.append(img);
//   });
// };

// xhr.open("GET", "https://api.thecatapi.com/v1/images/search?limit=10");
// xhr.send();
