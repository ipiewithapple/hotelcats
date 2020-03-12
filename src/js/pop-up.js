export default function () {
  const btns = document.querySelectorAll('.btn--order');
  const popUpOuter = document.querySelector('.pop-up');
  const popUp = document.querySelector('.pop-up__wrapper');
  const popUpOk = document.querySelector('.pop-up__wrapper--ok');
  const popUpOkBtn = document.querySelector('.pop-up__ok');
  const popUpCloseBtn = document.querySelectorAll('.pop-up__close');
  const popUpForm = document.querySelector('.pop-up__form');

  const closePopup = () => {
    document.querySelector('html', 'body').style.overflowY = 'auto';
    popUpOuter.style.display = 'none';
    popUp.classList.remove('animated', 'slideInDown');
    popUpOk.style.display = 'none';
  };

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelector('html', 'body').style.overflowY = 'hidden';
      popUpOuter.style.display = 'flex';
      popUp.classList.add('animated', 'slideInDown');
    })
  });

  popUpCloseBtn.forEach((btn) => {
    btn.addEventListener('click', () => closePopup());
  });

  popUpForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    popUp.classList.remove('animated', 'slideInDown');
    popUp.classList.add('animated','fadeOut');
    popUpOk.classList.add('animated','fadeIn');
    popUpOk.style.display = 'block';
  });

  popUpOkBtn.addEventListener('click', () => closePopup());
};