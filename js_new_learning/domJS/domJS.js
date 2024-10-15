// let pkCity = [
//   { city1: "Abbottabad" },
//   { city2: "Lahore" },
//   { city3: "Karachi" },
//   { city4: "Peshawar" },
//   { city5: "Islamabad" },
//   { city6: "Hyderabad" },
//   { city7: "Multan" },
// ];

// // console.log(pkCity);

// pkCity.push({ city8: "Attock" }); // add el to last
// pkCity.pop(); // remove last el
// pkCity.unshift("new"); // add el to first
// pkCity.shift(); // remove first el

// pkCity.forEach((elem) => {
//   console.log(elem);
// });

// console.log(pkCity);

// // Oct 2024

const addBtn = document.querySelector("#addBtn");
const container = document.querySelector(".container");

const imgs = [
  {
    image1:
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    image2:
      "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    image3:
      "https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    image4:
      "https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    image5:
      "https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

addBtn.addEventListener("click", (e) => {
  const urls = imgs.map((obj) => Object.values(obj)[0]);

  const randomUrl = urls[Math.floor(Math.random() * urls.length)];

  for (let i = 1; i <= 1000; i++) {
    console.log(i);
  }

  let image = document.createElement("img");
  image.className = "photo";
  image.src = randomUrl;
  container.append(image);
});
