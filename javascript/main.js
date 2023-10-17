let hearts;
let favorites = [];
let cardClass;
let storageValue = JSON.parse(localStorage.getItem("favorites"));

if (storageValue !== null) {
  favorites.push(storageValue);
}
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjNjNzViMWI2ZDUwMGNkMjgzZjU0MmU4ZTFlZDJkYSIsInN1YiI6IjVjMDNiNDQwMGUwYTI2NDg2YTA2ZjYwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pj6auQlw-VfPG6PenA6MbujH_SQk3Xr3LmD6H9WdH04",
  },
};
//!default page
fetch(
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=5",
  options
)
  .then((response) => response.json())
  .then((response) => {
    response.results.forEach((element, index) => {
      let date = new Date(element.release_date).getFullYear();

      //!slider
      document.querySelector("#slider").innerHTML += `
      
      <div style="display: flex;flex-direction: column;" class="cardSlider">
      <img  src="https://image.tmdb.org/t/p/w500/${element.poster_path}">
      <p> ${element.original_title}</p>
      <span>${date}</span>
      <div>
    
      
      
      `;
      //!the all page!
      document.querySelector("#mainPopular").innerHTML += `
      <div style="display: flex;flex-direction: column;" class="card" id="card${index}">
      <img  src="https://image.tmdb.org/t/p/w500/${element.poster_path}">
      <div style="display: flex;flex-direction: row;" class="divHeart"> 
      <p> ${element.original_title}</p>
      <i class="fa fa-heart" style="font-size: 20px"></i>
       </div>
      <span>${date}</span>
      </div>
      `;
    });
    //!hearts
    hearts = document.getElementsByClassName("fa-heart");

    cardClass = document.getElementsByClassName("card");
    for (let i = 0; i < cardClass.length; i++) {
      cardClass[i].addEventListener("click", () => {
        console.log("click");
        document.querySelector(
          ".imgAlic"
        ).innerHTML = `<div class="cardOnDisplay">${cardClass[i].innerHTML}</div>
        <p>${response.results[i].overview}</p>
        
        `;
      });
    }
    for (let i = 0; i < hearts.length; i++) {
      hearts[i].addEventListener("click", () => {
        hearts[i].style.color = "red";
        let strTmp = document.getElementById(`card${i}`).innerHTML;

        favorites.push(`<div class="cardFavorites">${strTmp}</div>`);

        localStorage.setItem("favorites", JSON.stringify(favorites));
      });
    }
  })
  .catch((err) => console.error(err));

document.querySelector("#format").addEventListener("change", () => {
  document.querySelector("#slider").innerHTML = "";
  document.querySelector("#mainPopular").innerHTML = "";

  let valueChoose = document.querySelector("select").value;
  //!popular of week
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
        response.results.forEach((element, index) => {
          let date = new Date(element.release_date).getFullYear();

          //!change the alider to popular of week
          document.querySelector("#slider").innerHTML += `
          
          <div style="display: flex;flex-direction: column;" class="cardSlider">
          <img  src="https://image.tmdb.org/t/p/w500/${element.poster_path}">
          <p> ${element.original_title}</p>
          <span>${date}</span>
        
          
          
          `;
          //!change the main popular of week
          document.querySelector("#mainPopular").innerHTML += `
          <div style="display: flex;flex-direction: column;" class="card" id="card${index}">
          <img  src="https://image.tmdb.org/t/p/w500/${element.poster_path}">
          <div style="display: flex;flex-direction: row;" class="divHeart"> 
          <p> ${element.original_title}</p>
          <i class="fa fa-heart" style="font-size: 20px"></i>
           </div>
          <span>${date}</span>
          `;
        });
        hearts = document.getElementsByClassName("fa-heart");
        cardClass = document.getElementsByClassName("card");
        for (let i = 0; i < cardClass.length; i++) {
          cardClass[i].addEventListener("click", () => {
            console.log("click");
            document.querySelector(
              ".imgAlic"
            ).innerHTML = `<div class="cardOnDisplay">${cardClass[i].innerHTML}</div>
            <p>${response.results[i].overview}</p>
            
            `;
          });
        }

        for (let i = 0; i < hearts.length; i++) {
          hearts[i].addEventListener("click", () => {
            hearts[i].style.color = "red";
            let strTmp = document.getElementById(`card${i}`).innerHTML;

            favorites.push(`<div class="cardFavorites">${strTmp}</div>`);

            localStorage.setItem("favorites", JSON.stringify(favorites));
          });
        }
      })
      .catch((err) => console.error(err));
  } else {
    //!if daiy !
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
        response.results.forEach((element, index) => {
          let date = new Date(element.release_date).getFullYear();

          //! change slider popular day
          document.querySelector("#slider").innerHTML += `
          
          <div style="display: flex;flex-direction: column;" class="cardSlider">
          <img  src="https://image.tmdb.org/t/p/w500/${element.poster_path}">
          <p> ${element.original_title}</p>
          <span>${date}</span>
        
          
          
          `;
          //!change the main popular day
          document.querySelector("#mainPopular").innerHTML += `
          <div  style="display: flex;flex-direction: column;" class="card" id="card${index}">
          <img  src="https://image.tmdb.org/t/p/w500/${element.poster_path}">
          <div style="display: flex;flex-direction: row;" class="divHeart"> 
          <p> ${element.original_title}</p>
          <i class="fa fa-heart" style="font-size: 20px"></i>
           </div>
          <span>${date}</span>
          `;
        });
        cardClass = document.getElementsByClassName("card");
        for (let i = 0; i < cardClass.length; i++) {
          cardClass[i].addEventListener("click", () => {
            console.log("click");
            document.querySelector(
              ".imgAlic"
            ).innerHTML = `<div class="cardOnDisplay">${cardClass[i].innerHTML}</div>
            <p>${response.results[i].overview}</p>
            
            `;
          });
        }
        hearts = document.getElementsByClassName("fa-heart");
        for (let i = 0; i < hearts.length + 1; i++) {
          hearts[i].addEventListener("click", () => {
            hearts[i].style.color = "red";
            let strTmp = document.getElementById(`card${i}`).innerHTML;

            favorites.push(`<div class="cardFavorites">${strTmp}</div>`);

            localStorage.setItem("favorites", JSON.stringify(favorites));
          });
        }
      })
      .catch((err) => console.error(err));
  }
});

console.log(favorites);
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
