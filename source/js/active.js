var buttonss = document.querySelector(".form__button");
var namess = document.querySelector(".form__input--name");
var weight = document.querySelector(".form__input--weight");
var email = document.querySelector(".form__input--email");
var tel = document.querySelector(".form__input--tel");
var form = document.querySelector(".form__tag");

form.addEventListener("submit",function (evt) {
  if(!namess.value) {
  evt.preventDefault();
  namess.classList.add("form__input--error") ;}
  else {
    namess.classList.remove("form__input--error")
  ;}
});

form.addEventListener("submit",function (evt) {
  if(!weight.value) {
  evt.preventDefault();
  weight.classList.add("form__input--error") ;}
  else {
    weight.classList.remove("form__input--error")
  ;}
});

form.addEventListener("submit",function (evt) {
  if(!email.value) {
  evt.preventDefault();
  email.classList.add("form__input--error") ;}
  else {
    email.classList.remove("form__input--error")
  ;}
});

form.addEventListener("submit",function (evt) {
  if(!tel.value) {
  evt.preventDefault();
  tel.classList.add("form__input--error") ;}
  else {
    tel.classList.remove("form__input--error")
  ;}
});

