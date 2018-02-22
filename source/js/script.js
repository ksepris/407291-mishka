var button = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav");

button.classList.add("main-nav__toggle--visible");
menu.classList.add("main-nav--closed");

button.addEventListener("click", function (event) {
  menu.classList.toggle("main-nav--opened");
  menu.classList.toggle("main-nav--closed");
});


var link = document.querySelector(".product__order");
var popup = document.querySelector(".modal-content");
var popup_bcg = document.querySelector(".modal-content-bcg");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.toggle("modal-content--opened");
  popup_bcg.classList.toggle("modal-content--opened");
});

var link = document.querySelector(".products-catalog__basket");
var popup = document.querySelector(".modal-content");
var popup_bcg = document.querySelector(".modal-content-bcg");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.toggle("modal-content--opened");
  popup_bcg.classList.toggle("modal-content--opened");
});
