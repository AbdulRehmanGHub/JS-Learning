async function quotes() {
  let url = "https://dummyjson.com/quotes";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

quotes();

export { quotes };
