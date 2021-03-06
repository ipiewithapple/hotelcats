import WOW from 'wow.js';
import menu from './menu.js';
import popUp from './pop-up.js';
import filter from './filter.js';
import roomDetailSlider from './room-detail-slider.js';
import Slider from './slider.js';

// Menu burger
menu();

// WOW init
new WOW().init();

// Slider
if (document.title == 'Котейка | Главная') {
  new Slider('reviews', 'reviews__list', 'reviews__list-item').init();
  new Slider('rooms', 'rooms__list', 'rooms__list-item').init();
};

if (document.title == 'Котейка | Подробно') {
  new Slider('rooms', 'rooms__list', 'rooms__list-item').init();
};
// Pop-Up
popUp();

// Filter
if (document.title == 'Котейка | Номера') {
  filter();
};

// Room detail slider
if (document.title == 'Котейка | Подробно') {
  roomDetailSlider();
};
