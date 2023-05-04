let offset = 0;
const sliderLine = document.querySelector(".slider-line");

document.querySelector(".slider-next").addEventListener("click", function () {
  offset += 340;
  if (offset > 1020) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
});
document.querySelector(".slider-prev").addEventListener("click", function () {
  offset -= 340;
  if (offset < 0) {
    offset = 1020;
  }
  sliderLine.style.left = -offset + "px";
});
function showMessage() {
  console.log("Я учу JavaScript!");
}
showMessage();
