const searchSource = document.querySelector('.search__source');

const searchSourceIcon = document.querySelector('.search__source-toggler-icon');

const searchSection = document.querySelector('.search');

searchSource.addEventListener('click', (event) => {
  searchSource.classList.toggle('active');

  if (event.target.classList.contains('search__source-list-item')) {
    const sourceName = event.target.dataset.source;
    const src = `./assets/search/${sourceName}-icon.svg`;
    searchSourceIcon.setAttribute('src', src);
  }
});

searchSection.addEventListener('click', (event) => {
  if (event.target.classList.contains('search__wrapper')) {
    searchSource.classList.remove('active');
  }
});
