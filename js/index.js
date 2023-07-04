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
