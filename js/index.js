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

const examplesList = document.querySelector('.examples__list');

const exampleItems = [
  { id: 'exampleSwiperOne', countOfImages: 2 },
  { id: 'exampleSwiperTwo', countOfImages: 4 },
  { id: 'exampleSwiperThree', countOfImages: 13 },
  { id: 'exampleSwiperFour', countOfImages: 7 },
  { id: 'exampleSwiperFive', countOfImages: 16 },
  { id: 'exampleSwiperSix', countOfImages: 14 },
];

const exampleIds = exampleItems.map((item) => item.id);

const createSwiperSlide = (galleryIndex, slideIndex) => {
  const swiperSlide = document.createElement('div');
  swiperSlide.classList.add('swiper-slide');

  const anchor = document.createElement('a');
  anchor.href = `./assets/examples/example${galleryIndex + 1}-${slideIndex + 1}.jpg`;
  anchor.dataset.fancybox = 'gallery' + galleryIndex;

  const image = document.createElement('img');
  image.setAttribute('src', anchor.href);
  image.setAttribute('alt', 'example');

  anchor.append(image);
  swiperSlide.append(anchor);
  return swiperSlide;
};

exampleItems.forEach((item, index) => {
  const listItem = document.createElement('li');
  listItem.classList.add('examples__list-item');
  listItem.id = item.id;

  const swiper = document.createElement('div');
  swiper.classList.add('swiper');

  const swiperWrapper = document.createElement('div');
  swiperWrapper.classList.add('swiper-wrapper');

  const swiperPagination = document.createElement('div');
  swiperPagination.classList.add('swiper-pagination');

  const swiperButtonPrev = document.createElement('div');
  swiperButtonPrev.classList.add('swiper-button-prev');

  const swiperButtonNext = document.createElement('div');
  swiperButtonNext.classList.add('swiper-button-next');

  for (let i = 0; i < item.countOfImages; i++) {
    const slide = createSwiperSlide(index, i);
    swiperWrapper.append(slide);
  }

  swiper.append(swiperWrapper, swiperPagination, swiperButtonPrev, swiperButtonNext);
  listItem.append(swiper);
  examplesList.append(listItem);
});

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

const successModal = document.getElementById('successModal');

successModal.addEventListener('click', (event) => {
  const { target } = event;

  const canCloseModal =
    target.classList.contains('modal') || target.classList.contains('modal__close-button');

  if (canCloseModal) event.currentTarget.classList.remove('active');
});

const callbackForm = document.querySelector('.callback__form');

callbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(callbackForm);
  const userName = formData.get('userName');
  const userEmail = formData.get('userEmail');
  const userPhone = formData.get('userPhone');

  const message = { userName, userEmail, userPhone };

  fetch('../contact-form-handler.php', {
    method: 'POST',
    data: message,
  })
    .then(() => {
      successModal.classList.add('active');
      setTimeout(() => successModal.classList.remove('active'), 3000);
    })
    .catch((error) => console.log(error));
});
