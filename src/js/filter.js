export default function () {
  const filterForm = document.querySelector('.filter__form');
  const filterBtn = document.querySelector('.filter__btn');
  const filterPopUp = document.querySelector('.filter__form-popup');
  const filterCloseBtn = document.querySelector('.filter__form-close');
  const filterSelect = document.querySelector('.filter__select');
  const roomsList = document.querySelector('.rooms-page__list');
  const rooms = document.querySelectorAll('.rooms-page__list-item');

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

  const onFilterSelectChange = () => {

    const roomsArr = [].slice.call(rooms);
    const filteredRooms = roomsArr.sort((a,b) => {
      return a.dataset.price - b.dataset.price ? -1 : 1;
    })
    
    while(roomsList.firstChild) {
      roomsList.removeChild(roomsList.firstChild);
    };

    filteredRooms.forEach((room) => {
      roomsList.append(room);
    })
    
  }

  filterBtn.addEventListener('click', openFilterForm);
  filterCloseBtn.addEventListener('click', closeFilterForm);
  filterSelect.addEventListener('change', onFilterSelectChange);
}