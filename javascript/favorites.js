const favoritesLS = JSON.parse(localStorage.getItem("favorites"));
let tmpCard = [];
tmpCard.push(JSON.parse(localStorage.getItem("favorites")));
console.log(tmpCard);

tmpCard.forEach((elemet) => {
  if (elemet !== null) {
    document.getElementById("mainFavo").innerHTML += elemet;
  }
});
