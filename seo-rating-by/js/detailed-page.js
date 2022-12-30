const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2020', '2021', '2022'],
    datasets: [
      {
        label: 'Разработка сайтов',
        data: [39, 47, 56],
        borderColor: '#00BB8E',
        borderWidth: 4,
        tension: 0.1,
      },
      {
        label: 'SEO',
        data: [2, 4, 9],
        borderColor: '#0059AB',
        borderWidth: 4,
        tension: 0.1,
      },
    ],
  },
});

const detailedNav = document.querySelector('.company-info__nav');

const detailedNavButtons = detailedNav.querySelectorAll(' .button');

const tabs = [...document.querySelector('#tabs').children];

detailedNav.addEventListener('click', (event) => {
  if (!event.target.classList.contains('button')) return;
  const [currentTab] = tabs.filter(
    (tab) => tab.id === `${event.target.id}-tab`
  );
  tabs.forEach((tab) => tab.classList.remove('active'));
  currentTab.classList.add('active');
  detailedNavButtons.forEach((button) => button.classList.remove('active'));
  event.target.classList.add('active');
});

const commentModal = document.getElementById('comment-modal');

const commentButton = document.querySelector('#comment-button');

commentButton.addEventListener('click', () =>
  commentModal.classList.remove('hidden')
);

commentModal.addEventListener('click', (event) => {
  console.log(event.target);
  if (event.target.classList.contains('overlay'))
    event.target.classList.add('hidden');
});
