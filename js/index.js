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
    1000: {
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
