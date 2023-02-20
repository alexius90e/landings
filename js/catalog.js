import ItcCustomSelect from './itc-custom-select.js';
import { lowerSlider, upperSlider, updateValue } from './dualRangeSlider.js';

const moduleSelect = new ItcCustomSelect('#moduleSelect', {
  name: 'modules',
  targetValue: '',
  content: 'Модуль',
  options: [
    ['Module 1', 'Module 1'],
    ['Module 2', 'Module 2'],
  ],
});

const gsmSelect = new ItcCustomSelect('#gsmSelect', {
  name: 'gsm',
  targetValue: '',
  content: 'GSM',
  options: [
    ['GSM750', 'GSM750'],
    ['GSM750', 'GSM1500'],
  ],
});

const frequencySelect = new ItcCustomSelect('#frequencySelect', {
  name: 'frequency',
  targetValue: '',
  content: 'Рабочая частота',
  options: [
    ['1333MHz', '1333MH'],
    ['1666MHz', '1666MHz'],
  ],
});

const supplySelect = new ItcCustomSelect('#supplySelect', {
  name: 'supply',
  targetValue: '',
  content: 'Питание',
  options: [
    ['220V AC', '220V AC'],
    ['24V DC', '24V DC'],
  ],
});

const priceSelect = new ItcCustomSelect('#priceSelect', {
  name: 'price',
  targetValue: '',
  content: 'По цене',
  options: [
    ['Дешевые', 'Дешевые'],
    ['Дорогие', 'Дорогие'],
  ],
});

const ratingSelect = new ItcCustomSelect('#ratingSelect', {
  name: 'rating',
  targetValue: '',
  content: 'По популярности',
  options: [
    ['Самые популярные', 'Самые популярные'],
    ['Менее популярные', 'Менее популярные'],
  ],
});

const nameSelect = new ItcCustomSelect('#nameSelect', {
  name: 'name',
  targetValue: '',
  content: 'По названию',
  options: [
    ['от А до Я', 'от А до Я'],
    ['от Я до А', 'от Я до А'],
  ],
});

//reset filter

const resetFilterButton = document.querySelector(
  '.catalog__filter-button_reset'
);

resetFilterButton.addEventListener('click', () => {
  [moduleSelect, gsmSelect, frequencySelect, supplySelect].forEach(
    (select) => (select.value = '')
  );
  lowerSlider.value = 0;
  upperSlider.value = 50000;
  updateValue();
});

// toggle filter menu

const filterMenuToggler = document.querySelector(
  '.catalog__filter-menu-toggler'
);

const filterMenu = document.querySelector('.catalog__filter-menu > .menu');

filterMenuToggler.addEventListener('click', (e) => {
  e.target.classList.toggle('active');
  const isVisible = e.target.classList.contains('active');
  filterMenu.style.display = isVisible ? 'block' : 'none';
});

// toggle filter

const filter = document.querySelector('.catalog__filter');
const filterToggler = document.querySelector('.catalog__filter-toggler');
const filterCloseButton = document.querySelector(
  '.catalog__filter-button_close'
);

filterToggler.addEventListener('click', () =>
  filter.classList.toggle('hidden')
);

filterCloseButton.addEventListener('click', () =>
  filter.classList.add('hidden')
);

// modal

const catalogItems = document.querySelectorAll(
  '.catalog__card.catalog-list-item'
);

const catalogModal = document.querySelector('#catalogModal');
const catalogModalCloseButton = document.querySelector('#catModalCloseBtn');

catalogModalCloseButton.addEventListener('click', () =>
  catalogModal.classList.remove('visible')
);

catalogItems.forEach((item) => {
  item.addEventListener('click', () => catalogModal.classList.add('visible'));
});

catalogModal.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    catalogModal.classList.remove('visible');
  }
});

// catalog card sliders

const catalogSliderThumbs = new Swiper('.catalog-card-slider-thumbs', {
  breakpoints: {
    360: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});

const catalogSliderTop = new Swiper('.catalog-card-slider-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.catalog-card-slider-top .swiper-button-next',
    prevEl: '.catalog-card-slider-top .swiper-button-prev',
  },
  thumbs: {
    swiper: catalogSliderThumbs,
  },
});
