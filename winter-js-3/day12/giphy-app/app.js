import process from '../../../env.js';

const $searchForm = $('form');
const $searchInput = $('#search-input');
const $results = $('.results');

async function getGifs(searchText) {
  const response = await $.ajax({
    url: 'https://api.giphy.com/v1/gifs/search',
    dataType: 'json',
    data: {
      api_key: process.env.GIPHY_API,
      q: searchText,
      limit: 20,
    },
  });

  const gifs = response.data;

  return gifs;
}

/**
 * @typedef {{images: { downsized: {url: string}}, title: string }} Gif
 */

/**
 * @param {Gif[]} gifs
 */
function renderGifs(gifs) {
  const gifsMarkups = gifs.map(
    (gif) =>
      `<figure class="gif-box"><img class="img-box" src="${gif.images.downsized.url}" alt="${gif.title}"/></figure>`
  );
  $results.html(gifsMarkups.join(''));
}

async function handleSearchFormSubmit(e) {
  e.preventDefault();
  const searchText = $searchInput.val();
  const gifs = getGifs(searchText);
  renderGifs(gifs);
}

const app = {
  init() {
    $searchForm.on('submit', handleSearchFormSubmit);
  },
};

$(function () {
  app.init();
});
