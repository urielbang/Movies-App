const favoritesLS = JSON.parse(localStorage.getItem("favorites"));

let tmpCard = [];
tmpCard.push(JSON.parse(localStorage.getItem("favorites")));
console.log(tmpCard);

tmpCard.forEach((elemet) => {
  if (elemet !== null) {
    document.getElementById("mainFavo").innerHTML += elemet;
  }
});

//!navBar
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
