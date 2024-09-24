let pkCity = [
  { city1: "Abbottabad" },
  { city2: "Lahore" },
  { city3: "Karachi" },
  { city4: "Peshawar" },
  { city5: "Islamabad" },
  { city6: "Hyderabad" },
  { city7: "Multan" },
];

// console.log(pkCity);

pkCity.push({ city8: "Attock" }); // add el to last
pkCity.pop(); // remove last el
pkCity.unshift("new"); // add el to first
pkCity.shift(); // remove first el

pkCity.forEach((elem) => {
  console.log(elem);
});

console.log(pkCity);