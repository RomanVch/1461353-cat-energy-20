import {modal} from "./modal"
// кнопка заказа
console.log(modal)
const servicesButtons=document.querySelectorAll(".services__button")
for (let i = 0; i <= servicesButtons.length; i++) {
  servicesButtons[i].addEventListener("click", function() {
    modal.classList.remove("visually-hidden")
    document.body.setAttribute("style", "overflow: hidden");
  })
};
