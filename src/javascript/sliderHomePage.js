let counter = -140;
let idRightinterval;
let idLeftInteval;
document.querySelector("#slider").style = `translate: -140px;`;

document.querySelector("#rightArrow").addEventListener("click", () => {
  clearInterval(idLeftInteval);
  clearInterval(idRightinterval);
  idRightinterval = setInterval(sliderMoverRight, 10);
});

function sliderMoverRight() {
  clearInterval(idLeftInteval);
  document.querySelector("#slider").style = `translate: ${counter}px;`;
  counter--;
  if (counter == -2300) {
    clearInterval(idRightinterval);
  }
}
function sliderMoverLeft() {
  document.querySelector("#slider").style = `translate: ${counter}px;`;
  counter++;
  if (counter == 0) {
    clearInterval(idLeftInteval);
  }
}
document.querySelector("#leftArrow").addEventListener("click", () => {
  clearInterval(idRightinterval);
  clearInterval(idLeftInteval);
  idLeftInteval = setInterval(sliderMoverLeft, 10);
});
