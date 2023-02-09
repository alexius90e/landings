const swiper = new Swiper('.first-screen .swiper', {
  loop: true,
  pagination: {
    el: '.first-screen .swiper-pagination',
  },
  navigation: {
    nextEl: '.first-screen .swiper-button-next',
    prevEl: '.first-screen .swiper-button-prev',
  },
});
