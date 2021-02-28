// кнопка заказа

const orderButtons =document.querySelectorAll(".btn__order");
const orderServicesButtons =document.querySelectorAll(".services__button");

const modal =document.querySelector(".modal");
const closeModal=document.querySelector(".modal__close");

const onOrdersButton=()=>{

}

closeModal.addEventListener("click",()=>{
  modal.classList.add("visually-hidden")
  document.body.removeAttribute("style", "overflow: hidden");
})
for (let i = 0; i <= orderButtons.length - 1; i++) {
  orderButtons[i].addEventListener("click", function() {
    modal.classList.remove("visually-hidden")
    document.body.setAttribute("style", "overflow: hidden");
  })
};

orderServicesButtons.addEventListener("click",()=>{
  modal.classList.add("visually-hidden")
  document.body.removeAttribute("style", "overflow: hidden");
})
for (let i = 0; i <= orderButtons.length - 1; i++) {
  orderButtons[i].addEventListener("click", function() {
    modal.classList.remove("visually-hidden")
    document.body.setAttribute("style", "overflow: hidden");
  })
};
