function moviesCategory(category) {
  document.getElementById("movies").innerHTML = "";
  let movies;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjgxNzhhOGEzMTZkNTlmMDg1YjkxMmMwMDk2MDEyNSIsInN1YiI6IjY1ODJlMTM3ZTgxMzFkNDBmMWE0YzEzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y_if8Yw5-JIruUD1x4joguu17oqTTfq_N4IHiynsX3g",
    },
  };

  fetch(
    `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
    options
  )
    .then((response) => response.json())
    .then((response) => (movies = response.results))
    .then((movies) => {
      movies.forEach((movie) => {
        document.getElementById("movies").innerHTML += `
      <div class="film">
      <img
        src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"
        alt=""
      />
      <div class="cover">
        <h2>${movie.title}</h2>
        <p class="info-p">
          ${movie.overview}
        </p>
        <p class="rate">Rate: ${movie.vote_average}</p>
        <p class="date">Date: ${movie.release_date}</p>
      </div>
      </div>
      `;
      });
    })
    .catch((err) => console.error(err));
}

moviesCategory("now_playing");
