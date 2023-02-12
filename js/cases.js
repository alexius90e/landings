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
