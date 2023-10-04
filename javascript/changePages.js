document.querySelector("#btn1").addEventListener("click", () => {
  document.querySelector("#slider").innerHTML = "";
  document.querySelector("#mainPopular").innerHTML = "";
  fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
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
          <div style="display: flex;flex-direction: row;" class="divHeart"> 
          <p> ${element.original_title}</p>
          <i class="fa fa-heart" style="font-size: 20px"></i>
           </div>
          <span>${date}</span>
          `;
      });
    })
    .catch((err) => console.error(err));
});

document.querySelector("#btn2").addEventListener("click", () => {
  document.querySelector("#slider").innerHTML = "";
  document.querySelector("#mainPopular").innerHTML = "";
  fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2",
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
            <div style="display: flex;flex-direction: row;" class="divHeart"> 
            <p> ${element.original_title}</p>
            <i class="fa fa-heart" style="font-size: 20px"></i>
             </div>
            <span>${date}</span>
            `;
      });
    })
    .catch((err) => console.error(err));
});

document.querySelector("#btn3").addEventListener("click", () => {
  document.querySelector("#slider").innerHTML = "";
  document.querySelector("#mainPopular").innerHTML = "";
  fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=3",
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
            <div style="display: flex;flex-direction: row;" class="divHeart"> 
            <p> ${element.original_title}</p>
            <i class="fa fa-heart" style="font-size: 20px"></i>
             </div>
            <span>${date}</span>
            `;
      });
    })
    .catch((err) => console.error(err));
});

document.querySelector("#btn4").addEventListener("click", () => {
  document.querySelector("#slider").innerHTML = "";
  document.querySelector("#mainPopular").innerHTML = "";
  fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=4",
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
            <div style="display: flex;flex-direction: row;" class="divHeart"> 
            <p> ${element.original_title}</p>
            <i class="fa fa-heart" style="font-size: 20px"></i>
             </div>
            <span>${date}</span>
            `;
      });
    })
    .catch((err) => console.error(err));
});

document.querySelector("#btn5").addEventListener("click", () => {
  document.querySelector("#slider").innerHTML = "";
  document.querySelector("#mainPopular").innerHTML = "";
  fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=5",
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
            <div style="display: flex;flex-direction: row;" class="divHeart"> 
            <p> ${element.original_title}</p>
            <i class="fa fa-heart" style="font-size: 20px"></i>
             </div>
            <span>${date}</span>
            `;
      });
    })
    .catch((err) => console.error(err));
});
