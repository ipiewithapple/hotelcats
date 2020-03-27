export default function () {
  const filterForm = document.querySelector('.filter__form');
  const filterBtn = document.querySelector('.filter__btn');
  const filterPopUp = document.querySelector('.filter__form-popup');
  const filterCloseBtn = document.querySelector('.filter__form-close');

  const closeFilterForm = () => {
    document.querySelector('html', 'body').style.overflowY = 'auto';
    filterPopUp.style.display = 'none';
    filterForm.classList.remove('animated', 'slideInDown');
  };

  const openFilterForm = () => {
    document.querySelector('html', 'body').style.overflowY = 'hidden';
    filterPopUp.style.display = 'block';
    filterForm.classList.add('filter__form--no-desktop', 'animated', 'slideInDown');
  };

  filterBtn.addEventListener('click', () => openFilterForm());
  filterCloseBtn.addEventListener('click', () => closeFilterForm());
}