let changeImage = document.getElementById("change_image");
let left = document.getElementById("left");
let right = document.getElementById("right");
var imgs = new Array("./img/cat-1.png", "./img/cat-2.png", "./img/cat-3.png");

function getPrevious() {
  changeImage.src = "./img/cat-1.png";
}
getPrevious();

function getNext() {
  changeImage.src = "./img/cat-3.png";
}
getNext();
