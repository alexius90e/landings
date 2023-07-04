Fancybox.bind('[data-fancybox]', {
  hideScrollbar: false,
  Thumbs: {
    showOnStart: false,
  },
});

const advantagesSwiper = new Swiper('.advantages .swiper', {
  autoplay: {
    delay: 2000,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    560: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: '.advantages .swiper-button-next',
    prevEl: '.advantages .swiper-button-prev',
  },
});

const examplesBlock = document.querySelector('.examples');

const exampleIds = [...examplesBlock.querySelectorAll('.examples__list-item')].map(
  (item) => item.id
);

exampleIds.map(
  (id) =>
    new Swiper(`#${id} .swiper`, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: `#${id} .swiper-button-next`,
        prevEl: `#${id} .swiper-button-prev`,
      },
      pagination: {
        el: `#${id} .swiper-pagination`,
        type: 'bullets',
      },
    })
);
