const callbackForm = document.getElementById('callback-modal');

const callbackButtons = document.querySelectorAll('.callback-button');

callbackButtons.forEach((item) =>
  item.addEventListener('click', () => callbackForm.classList.remove('hidden'))
);

callbackForm.addEventListener('click', (event) => {
  if (event.target.classList.contains('overlay'))
    event.target.classList.add('hidden');
});
