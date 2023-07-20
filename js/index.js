// timer

const today = new Date();

const deltaMinutes = Math.round((0.5 + Math.random() * 0.5) * 60);

const currentYear = today.getFullYear();

const currentMonth = today.getMonth();

const currentDay = today.getDate();

const currentHours = today.getHours() + 1;

const currentMinutes = today.getMinutes() + deltaMinutes;

const currentSeconds = today.getSeconds();

const deadline = new Date(
  currentYear,
  currentMonth,
  currentDay,
  currentHours,
  currentMinutes,
  currentSeconds
);

let timerId = null;

function declensionNum(num, words) {
  return words[
    num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
  ];
}

function countdownTimer() {
  const diff = deadline - new Date();
  if (diff <= 0) {
    clearInterval(timerId);
  }
  const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
  const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
  const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
  const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
  $days.textContent = days < 10 ? '0' + days : days;
  $hours.textContent = hours < 10 ? '0' + hours : hours;
  $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
  $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
  $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
  $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
  $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
  $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
}

const $days = document.querySelector('.timer__days');
const $hours = document.querySelector('.timer__hours');
const $minutes = document.querySelector('.timer__minutes');
const $seconds = document.querySelector('.timer__seconds');

countdownTimer();

timerId = setInterval(countdownTimer, 1000);

// modals

const modals = document.querySelectorAll('.modal');

const successModal = document.getElementById('successModal');

const errorModal = document.getElementById('errorModal');

const videoModal = document.getElementById('videoModal');

modals.forEach((item) =>
  item.addEventListener('click', (event) => {
    const target = event.target;

    const isTargetOverlay = target.classList.contains('modal');

    const isTargetCloseBtn = target.classList.contains('modal__close-button');

    const iframe = item.querySelector('iframe');

    if (iframe) {
      const iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    }

    if (isTargetOverlay || isTargetCloseBtn) item.classList.remove('active');
  })
);

const videoButton = document.getElementById('videoButton');

videoButton.addEventListener('click', () => {
  videoModal.classList.add('active');
});

// form

const callbackForm = document.querySelector('.callback__form');

callbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(callbackForm);
  const userName = formData.get('userName');
  const userEmail = formData.get('userEmail');
  const userPhone = formData.get('userPhone');

  const message = { userName, userEmail, userPhone };

  console.log(message);

  fetch('../contact-form-handler.php', {
    method: 'POST',
    data: message,
  })
    .then(() => successModal.classList.add('active'))
    .catch(() => errorModal.classList.add('active'));
});
