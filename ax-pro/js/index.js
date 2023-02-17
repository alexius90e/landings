const firstScreenSwiper = new Swiper('.first-screen .swiper', {
  loop: true,
  pagination: {
    el: '.first-screen .swiper-pagination',
  },
  navigation: {
    nextEl: '.first-screen .swiper-button-next',
    prevEl: '.first-screen .swiper-button-prev',
  },
});

const casesSwiper = new Swiper('.cases .swiper', {
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    568: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1001: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: '.cases .swiper-pagination',
  },
  navigation: {
    nextEl: '.cases__button-next',
    prevEl: '.cases__button-prev',
  },
});

// searchBar

const searchBar = document.querySelector('.search-bar');
const searchBarToggler = document.querySelector('.header .icon-button_search');
const searchBarCloseButton = document.querySelector('.search-bar__close');

searchBarToggler.addEventListener('click', () => {
  searchBar.classList.toggle('active');
});

searchBarCloseButton.addEventListener('click', () => {
  searchBar.classList.remove('active');
});

// catalogTypes

const catalogTypesBlock = document.querySelector('.catalog__types');
const allCatalogTypesButton = document.querySelector('.catalog__type_all');

if (catalogTypesBlock)
  catalogTypesBlock.addEventListener('click', (event) => {
    const catalogTypesList = [...catalogTypesBlock.children];

    if (event.target === allCatalogTypesButton) {
      catalogTypesList.forEach((element) => element.classList.remove('active'));
      event.target.classList.add('active');
    } else {
      event.target.classList.toggle('active');
    }

    const countOfActive = catalogTypesList.filter((item) =>
      item.classList.contains('active')
    ).length;

    if (countOfActive > 1) allCatalogTypesButton.classList.remove('active');
    if (countOfActive === 0) allCatalogTypesButton.classList.add('active');
  });

function handleSubMenuTogglerClick(e) {
  const [, subMenu] = e.target.parentNode.parentNode.children;
  const isSubMenuVisible = !e.target.classList.contains('active');
  e.target.classList.toggle('active');
  subMenu.style.display = isSubMenuVisible ? 'block' : 'none';
}

const subMenuTogglers = document.querySelectorAll('.menu__sub-toggler');

subMenuTogglers.forEach((toggler) => {
  toggler.addEventListener('click', handleSubMenuTogglerClick);
});

// burger

const topContacts = document.querySelector('.top-contacts');

const header = document.querySelector('.header');

const headerNav = document.querySelector('.header__nav');

const burgerButton = document.querySelector('#burgerButton');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('active');
  const isVisible = burgerButton.classList.contains('active');
  if (isVisible) {
    headerNav.classList.add('visible');
    header.classList.add('fixed');
    topContacts.classList.add('fixed');
  } else {
    headerNav.classList.remove('visible');
    header.classList.remove('fixed');
    topContacts.classList.remove('fixed');
  }
});
