let movieNameRef = document.querySelector("#movie-name");
let searchBtn = document.querySelector("#search-btn");
let result = document.querySelector("#result");

let getMovie = () => {
  let movieName = Number(movieNameRef.value);

  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class="msg">please enter movie id</h3>`;
  } else {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjNjNzViMWI2ZDUwMGNkMjgzZjU0MmU4ZTFlZDJkYSIsInN1YiI6IjVjMDNiNDQwMGUwYTI2NDg2YTA2ZjYwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pj6auQlw-VfPG6PenA6MbujH_SQk3Xr3LmD6H9WdH04",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${movieName}?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        let date = new Date(response.release_date);

        result.innerHTML = `
        <div class="info">
        <img  src="https://image.tmdb.org/t/p/w500/${
          response.poster_path
        }"class="poster">
        <div>
        <h2>${response.title}<h2>
        <div class="rating">
        <img src="/assets/images/star-icon.svg.png" >
        <h4>${response.vote_count}</h4>
        </div>
        <div class="details">
        <span>${response.vote_average}</span>
        <span> year:${date.getFullYear()}</span>
        <span>${response.runtime}</span>
        </div>
        <div class="genre">
        <div>${response.genres[0].name}</div>
        <div>${response.genres[1].name}</div>
        </div>
        </div>
        <h3>Plot:</h3>
        <p>${response.overview}</p>
        `;
      })
      .catch((error) => {
        result.innerHTML = `<h3 class="msg">Error Occured</h3>`;
        console.log(error);
      });
  }
};

document.querySelector("#serach-btn").addEventListener("click", getMovie);
