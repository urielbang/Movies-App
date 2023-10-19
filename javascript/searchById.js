let movieNameRef = document.querySelector("#movie-name");
let searchBtn = document.querySelector("#search-btn");
let result = document.querySelector("#result");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

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
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjdhMzIxYjY1ZjRkN2NlODVkYjQ2YTBkNTA3MmFjNCIsInN1YiI6IjY1MTY4ZDc0YTE5OWE2MDBmZTc1NTJmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7x--3RwamVL3bLm3Laiofc8PnepsjHFDDtCo7So7cAo",
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
        <img src="assets/images/star-icon.svg.png">
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
        
        <h3>actors:</h3>
        <p id="actorsText"></p>
        
        
        
      
        `;
      })
      .catch((error) => {
        result.innerHTML = `<h3 class="msg">Error Occured</h3>`;
        console.log(error);
      });

    fetch(
      `https://api.themoviedb.org/3/movie/${movieName}/credits?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        let strResult = "";

        for (let i = 0; i < data.cast.length / 2; i++) {
          if (data.cast[i].name !== null) {
            strResult += data.cast[i].name;
            document.querySelector("#actorsText").innerHTML +=
              data.cast[i].name;
            document.querySelector("#actorsText").innerHTML += ", ";
          }
        }
        console.log(strResult);
      })
      .catch((err) => console.error(err));
  }
};

document.querySelector("#serach-btn").addEventListener("click", getMovie);
