let search = document.querySelector(".search input");
let searchBtn = document.querySelector(".search i");
let moviesBox = document.querySelector(".movies-box");

async function fetchMovies() {
  let api = `http://www.omdbapi.com/?s=${search.value}&apikey=7a0e2e32`;
  let response = await fetch(api);
  let { Search: movies } = await response.json();

  moviesBox.innerHTML = movies
    .map(
      (movie) =>
        `
        <div class="movie-con">
            <img src="${movie.Poster}" alt="img">
                <div class="movie-text">
                    <h3>${movie.Title}</h3>
                    <p>${movie.Year}</p>
                </div>
        </div>
    `
    )
    .join("");
}

searchBtn.addEventListener("click", fetchMovies);

search.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    fetchMovies();
  }
});
