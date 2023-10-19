const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", (e) => {
  navLinks.classList.toggle("active");
  e.currentTarget.classList.toggle("is-active");
});

document.querySelector("#formId").addEventListener("submit", (e) => {
  e.preventDefault();
  let movieNAme = movieInput.value;
  movieInput.value = "";
  document.querySelector("#mainResult").innerHTML = "";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjdhMzIxYjY1ZjRkN2NlODVkYjQ2YTBkNTA3MmFjNCIsInN1YiI6IjY1MTY4ZDc0YTE5OWE2MDBmZTc1NTJmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7x--3RwamVL3bLm3Laiofc8PnepsjHFDDtCo7So7cAo",
    },
  };

  fetch(
    ` https://api.themoviedb.org/3/search/movie?query=${movieNAme}&include_adult=false&language=en-US&page=1`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((element) => {
        let date = new Date(element.release_date).getFullYear();

        document.querySelector("#mainResult").innerHTML += `
            
            <div style="display: flex;flex-direction: column;" class="card">
            <img  src="https://image.tmdb.org/t/p/w500/${element.poster_path}">
            <p> ${element.original_title}</p>
            <span>${date}</span>
            </div>
            `;
      });
    })
    .catch((err) => console.error(err));
});
