const casesPageSwiper = new Swiper('#casesPageSwiper', {
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: '.cases-page-slider .swiper-pagination',
    type: 'bullets',
  },
  slidesPerView: 1,
  spaceBetween: 20,
});

// modal

const casesItems = document.querySelectorAll('.cases-page-slide');

const casesModal = document.querySelector('#casesModal');
const casesModalCloseButton = document.querySelector('#casesCloseBtn');

casesModalCloseButton.addEventListener('click', () =>
  casesModal.classList.remove('visible')
);

casesItems.forEach((item) => {
  item.addEventListener('click', () => casesModal.classList.add('visible'));
});

casesModal.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    casesModal.classList.remove('visible');
  }
});

// description

const casesCardDescriptionToggler = document.querySelector(
  '.cases-card-description__toggler'
);

const casesCardDescription = document.querySelector(
  '.cases-card-description__text'
);

casesCardDescriptionToggler.addEventListener('click', (e) => {
  const hiddenClassName = 'hidden';
  casesCardDescription.classList.toggle(hiddenClassName);
  const isHidden = casesCardDescription.classList.contains(hiddenClassName);
  if (isHidden) {
    casesCardDescriptionToggler.classList.add(hiddenClassName);
  } else {
    casesCardDescriptionToggler.classList.remove(hiddenClassName);
  }
});
