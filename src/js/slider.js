import anime from 'animejs/lib/anime.es.js';

export default class Slider {
  constructor(parent, slidesParent, slides) {
    this.parent = parent;
    this.slidesParent = document.querySelector(`.${slidesParent}`);
    this.slides = document.querySelectorAll(`.${slides}`);
    this.slideStyles = window.getComputedStyle(document.querySelector(`.${slides}`), null);
    this.sliderPoints = document.querySelectorAll(`.${parent} .slider__points-item`);
    this.sliderBtnLeft = document.querySelector(`.${parent} .slider__btn--left`);
    this.sliderBtnRight = document.querySelector(`.${parent} .slider__btn--right`);
    this.slideWidth = '';
    this.sliderParentPosition = 0;
    this.pointId = 0;
  }

  animate() {
    anime({
      targets: this.slidesParent,
      translateX: this.sliderParentPosition,
      easing: 'linear',
      duration: 300
    });
  }

  removePoinActiveClass() {
    this.sliderPoints.forEach((point) => {
      point.classList.remove('slider__points-item--active');
    })
  }

  setPointActiveClass() {
    this.sliderPoints.forEach((point) => {
      point.dataset.id == this.pointId ? point.classList.add('slider__points-item--active') : null;
    });
  };

  onBtnsClick() {
    this.slides.forEach(el => {
      this.slideWidth = el.offsetWidth + Number(this.slideStyles.marginRight.replace(/px/g, ''));
    });

    this.sliderBtnLeft.addEventListener('click', () => {
      this.pointId <= 0 ? this.pointId = 2 : this.pointId--;
      this.removePoinActiveClass();
      this.setPointActiveClass();
      this.sliderParentPosition >= 0 ? this.sliderParentPosition = -this.slideWidth * (this.slides.length - 1) : this.sliderParentPosition += this.slideWidth;
      this.animate();
    });

    this.sliderBtnRight.addEventListener('click', () => {
      this.pointId >= 2 ? this.pointId = 0 : this.pointId++;
      this.removePoinActiveClass();
      this.setPointActiveClass();
      this.sliderParentPosition < -this.slidesParent.offsetWidth + this.slideWidth * 1.5 ? this.sliderParentPosition = 0 : this.sliderParentPosition -= this.slideWidth;
      this.animate();
    });
  };

  onPointClick() {
    this.sliderPoints.forEach((point, i) => {
      point.dataset.id = i;

      point.addEventListener('click', () => {
        this.pointId = point.dataset.id;

        this.removePoinActiveClass();
        this.setPointActiveClass();

        if (point.dataset.id == 0) {
          this.sliderParentPosition = 0;
          this.animate();
        } else {
          this.sliderParentPosition = -this.slideWidth * point.dataset.id;
          this.animate();
        }

      })

    });
  };

  init() {
    this.onPointClick();
    this.onBtnsClick();
  };
}
