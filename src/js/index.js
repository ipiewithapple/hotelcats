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

document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        document.querySelector('.pop-up').style.display = 'block';
        // document.body.style.overflow = 'hidden';
    })
})


