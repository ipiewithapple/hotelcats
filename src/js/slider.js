import anime from 'animejs/lib/anime.es.js';

export default class Slider {
  constructor(parent, slidesParent, slides) {
    this.parent = parent;
    this.slidesParent = document.querySelector(`.${slidesParent}`);
    this.slides = document.querySelectorAll(`.${slides}`);
    this.sliderPoints = document.querySelectorAll(`.${parent} .slider__points-item`);
    this.sliderBtnLeft = document.querySelector(`.${parent} .slider__btn--left`);
    this.sliderBtnRight = document.querySelector(`.${parent} .slider__btn--right`);
  }

  onBtnsClick() {
    let slideWidth = '';
    let sliderParentPosition = 0;

    this.slides.forEach(el => {
      slideWidth = el.offsetWidth;
    });

    this.sliderBtnLeft.addEventListener('click', () => {
      sliderParentPosition >= 0 ? sliderParentPosition = -slideWidth * (this.slides.length - 1) : sliderParentPosition += slideWidth;
      anime({
        targets: this.slidesParent,
        translateX: sliderParentPosition,
        easing: 'linear',
        duration: 300
      });
    })

    this.sliderBtnRight.addEventListener('click', () => {
      sliderParentPosition < -this.slidesParent.offsetWidth + slideWidth * 2 ? sliderParentPosition = 0 : sliderParentPosition -= slideWidth;
      anime({
        targets: this.slidesParent,
        translateX: sliderParentPosition,
        easing: 'linear',
        duration: 300
      });
    })


  }

  onPointClick() {
    this.sliderPoints.forEach((point, i) => {

      point.dataset.id = i;

      point.addEventListener('click', () => {

        this.sliderPoints.forEach((point) => {
          point.classList.remove('slider__points-item--active');
        });

        point.classList.add('slider__points-item--active');

        if (point.dataset.id == 0) {
          anime({
            targets: this.slidesParent,
            translateX: 0,
            easing: 'linear',
            duration: 300
          });
        } else {
          anime({
            targets: this.slidesParent,
            translateX: this.slidesParent.offsetWidth / -3 * point.dataset.id,
            easing: 'linear',
            duration: 300
          });
        }

      })

    });

  }

  init() {
    this.onPointClick();
    this.onBtnsClick();
  }

}
