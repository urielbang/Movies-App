const favoritesLS = JSON.parse(localStorage.getItem("favorites"));
let hearts;

favoritesLS.forEach((elemet, index) => {
  if (elemet) {
    let date = new Date(elemet.release_date).getFullYear();

    document.querySelector(
      "#mainPopular"
    ).innerHTML += `<div style="display: flex;flex-direction: column;" class="card" id="card${index}">
    <img  src="https://image.tmdb.org/t/p/w500/${elemet.poster_path}">
    <div style="display: flex;flex-direction: row;" class="divHeart"> 
    <p> ${elemet.original_title}</p>
    <i class="fa fa-heart" style="font-size: 20px; color: red;"></i>
     </div>
    <span>${date}</span>
    </div>`;
  }
});

hearts = document.querySelectorAll(".fa-heart");

const onClickHeart = (heart, index) => {
  let movieLiked = favoritesLS[index];
  heart.style.color = "white";

  let updatedLocalStorage = favoritesLS.filter(
    (movie) => movie.original_title !== movieLiked.original_title
  );

  localStorage.setItem("favorites", JSON.stringify(updatedLocalStorage));
};
hearts.forEach((heart, index) =>
  heart.addEventListener("click", () => onClickHeart(heart, index))
);

//!navBar
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", (e) => {
  navLinks.classList.toggle("active");
  e.currentTarget.classList.toggle("is-active");
});
