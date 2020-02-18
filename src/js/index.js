// Menu burger
const burger = document.querySelector('.nav__burger');
const mobileMenu = document.querySelector('.nav-mobile');

burger.addEventListener('click', () => {
  burger.classList.toggle('nav__burger--open');
  mobileMenu.classList.toggle('nav-mobile--open');
})
