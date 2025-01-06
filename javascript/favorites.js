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
  heart.style.color = "white";
  // const movieLiked = response.results[index];
  // localStorage.setItem(
  //   "favorites",
  //   JSON.stringify([movieLiked, ...likesLocalStorage])
  // );
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
