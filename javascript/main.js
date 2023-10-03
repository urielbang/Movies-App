const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjNjNzViMWI2ZDUwMGNkMjgzZjU0MmU4ZTFlZDJkYSIsInN1YiI6IjVjMDNiNDQwMGUwYTI2NDg2YTA2ZjYwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pj6auQlw-VfPG6PenA6MbujH_SQk3Xr3LmD6H9WdH04",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=9",
  options
)
  .then((response) => response.json())
  .then((response) => {
    response.results.forEach((element) => {
      let date = new Date(element.release_date).getFullYear();

      document.querySelector("#slider").innerHTML += `
      
      <div style="display: flex;flex-direction: column;" class="cardSlider">
      <img  src="https://image.tmdb.org/t/p/w500/${element.poster_path}">
      <p> ${element.original_title}</p>
      <span>${date}</span>
      <div>
    
      
      
      `;
      document.querySelector("#mainPopular").innerHTML += `
      <div style="display: flex;flex-direction: column;" class="card">
      <img  src="https://image.tmdb.org/t/p/w500/${element.poster_path}">
      <p> ${element.original_title}</p>
      <span>${date}</span>
      </div>
      `;
    });
  })
  .catch((err) => console.error(err));

//! popular of day
document.querySelector("#format").addEventListener("change", () => {
  document.querySelector("#slider").innerHTML = "";
  document.querySelector("#mainPopular").innerHTML = "";

  let valueChoose = document.querySelector("select").value;
  if (valueChoose == "weekPopular") {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjNjNzViMWI2ZDUwMGNkMjgzZjU0MmU4ZTFlZDJkYSIsInN1YiI6IjVjMDNiNDQwMGUwYTI2NDg2YTA2ZjYwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pj6auQlw-VfPG6PenA6MbujH_SQk3Xr3LmD6H9WdH04",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=9",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        response.results.forEach((element) => {
          let date = new Date(element.release_date).getFullYear();

          document.querySelector("#slider").innerHTML += `
          
          <div style="display: flex;flex-direction: column;" class="cardSlider">
          <img  src="https://image.tmdb.org/t/p/w500/${element.poster_path}">
          <p> ${element.original_title}</p>
          <span>${date}</span>
        
          
          
          `;
          document.querySelector("#mainPopular").innerHTML += `
          <div style="display: flex;flex-direction: column;" class="card">
          <img  src="https://image.tmdb.org/t/p/w500/${element.poster_path}">
          <p> ${element.original_title}</p>
          <span>${date}</span>
          `;
        });
      })
      .catch((err) => console.error(err));
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
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=8",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        response.results.forEach((element) => {
          let date = new Date(element.release_date).getFullYear();

          document.querySelector("#slider").innerHTML += `
          
          <div style="display: flex;flex-direction: column;" class="cardSlider">
          <img  src="https://image.tmdb.org/t/p/w500/${element.poster_path}">
          <p> ${element.original_title}</p>
          <span>${date}</span>
        
          
          
          `;
          document.querySelector("#mainPopular").innerHTML += `
          <div style="display: flex;flex-direction: column;" class="card">
          <img  src="https://image.tmdb.org/t/p/w500/${element.poster_path}">
          <p> ${element.original_title}</p>
          <span>${date}</span>
          `;
        });
      })
      .catch((err) => console.error(err));
  }
});
