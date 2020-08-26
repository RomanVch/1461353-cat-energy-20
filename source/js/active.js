var buttonss = document.querySelector(".form__button");
var name = document.querySelector(".form__input--name");
var email = document.querySelector(".form__input--weight");
var weight= document.querySelector(".form__input--email");
var tel = document.querySelector(".form__input--tel");
var form = document.querySelector(".form__tag")

form.addEventListener("submit",function (evt) {
  if(!name.value || !weight.value || !tel.value) {
  evt.preventDefault();
  console.log("привет тупица");}
});
