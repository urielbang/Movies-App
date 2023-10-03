document.querySelector("#formId").addEventListener("submit", (e) => {
  e.preventDefault();
  let movieNAme = movieInput.value;
  console.log(movieNAme);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjdhMzIxYjY1ZjRkN2NlODVkYjQ2YTBkNTA3MmFjNCIsInN1YiI6IjY1MTY4ZDc0YTE5OWE2MDBmZTc1NTJmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7x--3RwamVL3bLm3Laiofc8PnepsjHFDDtCo7So7cAo",
    },
  };

  fetch(
    ` https://api.themoviedb.org/3/search/movie?query=${"Pirates of the Caribbean"}&include_adult=false&language=en-US&page=1`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
});
