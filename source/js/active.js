var buttonss = document.querySelector(".form__button");
var namess = document.querySelector(".form__input--name");
var email = document.querySelector(".form__input--weight");
var weight= document.querySelector(".form__input--email");
var tel = document.querySelector(".form__input--tel");
var form = document.querySelector(".form__tag");

form.addEventListener("submit",function (evt) {
  if(!namess.value) {
  evt.preventDefault();
  namess.classList.add("form__input-error") ;}
});
