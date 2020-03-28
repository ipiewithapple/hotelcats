export default function () {
  const filterForm = document.querySelector('.filter__form');
  const filterBtn = document.querySelector('.filter__btn');
  const filterPopUp = document.querySelector('.filter__form-popup');
  const filterCloseBtn = document.querySelector('.filter__form-close');
  const filterSelect = document.querySelector('.filter__select');
  const roomsList = document.querySelector('.rooms-page__list');
  const rooms = document.querySelectorAll('.rooms-page__list-item');
  const filterFormSubmit = document.querySelector('.filter__form-btn[type=submit]');

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
    let filteredRooms = [];

    switch (filterSelect.value) {
      case 'square-down':
        filteredRooms = roomsArr.sort((a, b) => {
          return a.dataset.square - b.dataset.square ? -1 : 1;
        });
        break;
      case 'price-down':
        filteredRooms = roomsArr.sort((a, b) => {
          return a.dataset.price - b.dataset.price ? -1 : 1;
        });
        break;
      case 'price-up':
        filteredRooms = roomsArr.sort((a, b) => {
          return a.dataset.price - b.dataset.price ? 1 : -1;
        });
        break;
      default:
        filteredRooms = roomsArr.sort((a, b) => {
          return a.dataset.square - b.dataset.square ? 1 : -1;
        });
    };

    while (roomsList.firstChild) {
      roomsList.removeChild(roomsList.firstChild);
    };

    filteredRooms.forEach((room) => {
      roomsList.append(room);
    });
  };

  filterBtn.addEventListener('click', openFilterForm);
  filterCloseBtn.addEventListener('click', closeFilterForm);
  filterSelect.addEventListener('change', onFilterSelectChange);

// Доделать
  const myPromise = (evt) => {
    evt.preventDefault();
    const divInfo = document.createElement('div');
    divInfo.setAttribute('style', 'position: absolute; top: 65%; left: 0; width: 100%; height: 100px; padding: 15px; font-size: 18px; color: #ffffff; background-color: #fac663; border-radius: 8px;');
    divInfo.textContent = 'Когда-нибудь у меня дойдут руки, и я его доделаю :)';
    filterForm.append(divInfo);
    setTimeout(() =>{
      divInfo.remove();
    }, 3000);
  }

  filterFormSubmit.addEventListener('click', myPromise);
}