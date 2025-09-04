let hearts;
let favorites = [];
let cardClass;
let likesLocalStorage = JSON.parse(localStorage.getItem("favorites")) || [];

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjNjNzViMWI2ZDUwMGNkMjgzZjU0MmU4ZTFlZDJkYSIsInN1YiI6IjVjMDNiNDQwMGUwYTI2NDg2YTA2ZjYwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pj6auQlw-VfPG6PenA6MbujH_SQk3Xr3LmD6H9WdH04",
  },
};
//!default page

const fetchDefaultData = async (pageNumber) => {
  try {
    const data = fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNumber}`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        return res.results;
      });

    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return { error: "Something went wrong" };
  }
};

// fetch(
//   "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => {
//     response.results.forEach((element, index) => {
//       let date = new Date(element.release_date).getFullYear();

const data = fetchDefaultData(1);
console.log(data);

//       //!slider
//       document.querySelector("#slider").innerHTML += `

//       <div style="display: flex;flex-direction: column;" class="cardSlider">
//       <img  src="https://image.tmdb.org/t/p/w500/${element.poster_path}">
//       <p> ${element.original_title}</p>
//       <span>${date}</span>
//       <div>

//       `;
//       //!the all page!
//       document.querySelector("#mainPopular").innerHTML += `
//       <div style="display: flex;flex-direction: column;" class="card" id="card${index}">
//       <img  src="https://image.tmdb.org/t/p/w500/${element.poster_path}">
//       <div style="display: flex;flex-direction: row;" class="divHeart">
//       <p> ${element.original_title}</p>
//       <i class="fa fa-heart" style="font-size: 20px"></i>
//        </div>
//       <span>${date}</span>
//       </div>
//       `;
//     });
//   })
//   .catch((err) => console.error(err));

//!hearts

const handleLikes = async () => {
  const data = await fetchDefaultData();

  hearts = document.querySelectorAll(".fa-heart");

  cardClass = document.getElementsByClassName("card");
  for (let i = 0; i < cardClass.length; i++) {
    cardClass[i].addEventListener("click", () => {
      console.log("click");
      document.querySelector(
        "#movieClickDisplay"
      ).innerHTML = `<div class="cardOnDisplay">${cardClass[i].innerHTML}</div>
       <p>${data.results[i].overview}</p>
       
       `;
    });
  }

  const onClickHeart = (heart, index) => {
    heart.style.color = "red";
    const movieLiked = data.results[index];

    if (
      !likesLocalStorage.some(
        (movie) => movie.original_title === movieLiked.original_title
      )
    ) {
      likesLocalStorage = [movieLiked, ...likesLocalStorage];
      localStorage.setItem("favorites", JSON.stringify(likesLocalStorage));
    } else {
      heart.style.color = "white";

      let updatedLocalStorage = likesLocalStorage.filter(
        (movie) => movie.original_title !== movieLiked.original_title
      );

      localStorage.setItem("favorites", JSON.stringify(updatedLocalStorage));
    }
  };

  hearts.forEach((heart, index) => {
    heart.addEventListener("click", () => onClickHeart(heart, index));
  });

  if (likesLocalStorage.length > 0) {
    let indicesLiked = likesLocalStorage.map((movieLiked) => {
      return data.results.findIndex(
        (movie) => movie.original_title === movieLiked.original_title
      );
    });

    indicesLiked.forEach((heartLiked) => {
      hearts.forEach((heart, index) => {
        if (heartLiked === index) {
          heart.style.color = "red";
        }
      });
    });
  }
};

handleLikes();

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

hamburger.addEventListener("click", (e) => {
  navLinks.classList.toggle("active");
  e.currentTarget.classList.toggle("is-active");
});
