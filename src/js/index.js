import WOW from 'wow.js';
import menu from './menu.js';
import popUp from './pop-up.js';
import Slider from './slider.js';

// Menu burger
menu();

// WOW init
new WOW().init();

// Slider
if (document.title == 'Котейка | Главная') {
  new Slider('reviews', 'reviews__list', 'reviews__list-item').init();
  new Slider('rooms', 'rooms__list', 'rooms__list-item').init();
}
// Pop-Up
popUp();

// Filter
const filterSelect = document.querySelector('.filter__select');
filterSelect.addEventListener('click', (e) => {
  filterSelect.classList.contains('filter__select--opened') ? filterSelect.classList.remove('filter__select--opened') : filterSelect.classList.add('filter__select--opened');
})


