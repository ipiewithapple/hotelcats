export default function () {
  const burger = document.querySelector('.nav__burger');
  const mobileMenu = document.querySelector('.nav-mobile');
  const link = document.querySelectorAll('.nav-mobile__list-link');

  burger.addEventListener('click', () => {
    burger.classList.toggle('nav__burger--open');
    mobileMenu.classList.toggle('nav-mobile--open');
  });

  link.forEach(el => {
    el.addEventListener('click', () => {
      mobileMenu.classList.remove('nav-mobile--open');
      burger.classList.remove('nav__burger--open');
    });
  });
}
