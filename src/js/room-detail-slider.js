export default function() {
  const mainPhoto = document.querySelector('.room-slider__main-photo');
  const miniPhotos = document.querySelectorAll('.room-slider__slide-mini');

  miniPhotos.forEach( (photo) => {
    photo.addEventListener('click', (evt) => {
      const miniPhotoBackground = window.getComputedStyle(photo).getPropertyValue('background');
      const mainPhotoBackground = window.getComputedStyle(mainPhoto).getPropertyValue('background');
      mainPhoto.style.background = miniPhotoBackground;
      photo.style.background = mainPhotoBackground;
    });
  });
}