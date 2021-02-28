//моб меню
const mobMenuOpen=document.querySelector(".header__button");
const mobMenuClose=document.querySelector(".mob-menu__close");
const mobMenu=document.querySelector(".mob-menu");


mobMenuOpen.addEventListener("click",()=>{mobMenu.classList.add("openMobileMenu")});

mobMenuClose.addEventListener("click",()=>{mobMenu.classList.remove("openMobileMenu")});


//меню услуг

const serviceButton=document.querySelectorAll(".services_button");
const serviceBlock=document.querySelectorAll(".services__block");
const serviceBlockSocial=document.querySelectorAll(".services__social_network_block");
const serviceBlockInfo=document.querySelectorAll(".services__info-block");

for (let i = 0; i <= serviceButton.length - 1; i++) {

  if(serviceButton) {
    serviceButton[i].addEventListener("click", function () {
      debugger
      for (let i = 0; i < serviceButton.length ; i++) {
        serviceButton[i].classList.remove("services_button__active");
        serviceBlock[i].classList.remove("services__block__active")
        serviceBlockSocial[i].classList.add("visually-hidden");
        serviceBlockInfo[i].classList.add("visually-hidden");

      }
      serviceButton[i].classList.add("services_button__active");
      serviceBlock[i].classList.add("services__block__active");
      serviceBlockSocial[i].classList.remove("visually-hidden");
      serviceBlockInfo[i].classList.remove("visually-hidden");

    });
  }
}



