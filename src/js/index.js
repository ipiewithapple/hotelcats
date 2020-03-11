import WOW from 'wow.js';
import Menu from './menu.js';
import Slider from './slider.js';

// Menu burger
Menu();

// WOW init
new WOW().init();

// Slider
new Slider('reviews', 'reviews__list', 'reviews__list-item').init();
new Slider('rooms', 'rooms__list', 'rooms__list-item').init();

// Pop-Up
document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        document.querySelector('.pop-up').style.display = 'block';
        document.querySelector('body').style.overflow = 'hidden';
    })
})

document.querySelector('.pop-up__close').addEventListener('click', () => {
  document.querySelector('.pop-up').style.display = 'none';
  document.body.style.overflow = 'auto';
})


