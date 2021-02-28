
// кнопка заказа

const servicesButtons=document.querySelectorAll(".services__button")
const modal =document.querySelector(".modal");
for (let i = 0; i <= servicesButtons.length - 1; i++) {
  servicesButtons[i].addEventListener("click", function() {
    modal.classList.remove("visually-hidden")
    document.body.setAttribute("style", "overflow: hidden");
  })
};
