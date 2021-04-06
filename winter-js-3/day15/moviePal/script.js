import process from '../../../env.js';

/**
 * @typedef {{
 * title: 'The Shining',
 * year: '5d3660895b4b9d7a60a311f1',
 * __v: 0,
 * _id: '5d36625e5b4b9d7a60a31214',
 * __proto__: Object
 * }} Movie
 */

/**
 * @typedef {{
 * Actors: string,
 * Awards: string
 * BoxOffice: string
 * Country: string
 * DVD: string
 * Director: string
 * Genre: string
 * Language: string
 * Metascore: string
 * Plot: string
 * Poster: string
 * Production: string
 * Rated: string
 * Ratings: {source: string, value: string}[],
 * Released: string
 * Response: string
 * Runtime: string
 * Title: string
 * Type: string
 * Website: string
 * Writer: string
 * Year: string
 * imdbID: string
 * imdbRating: string
 * imdbVotes: string
 * }} ImdbMovie
 *
 */

/**
 * @returns {Movie[]}
 */
async function getAllMovies() {
  const data = await $.ajax({
    url:
      'https://retroapi.hackeryou.com/api/years?apiKey=' +
      process.env.RETRO_API,
  });
  const movies = data.reduce((movies, obj) => movies.concat(obj.movies), []);
  return movies;
}

/**
 *
 * @param {Movie[]} movies
 * @returns {Movie}
 */
function getRandomMovie(movies) {
  const randomIndex = Math.floor(Math.random() * movies.length);
  return movies[randomIndex];
}

/**
 *
 * @param {string} title
 * @param {number} year
 * @returns {ImdbMovie}
 */
async function getImdbMovieByTitleAndYear(title, year) {
  const data = await $.ajax({
    url: `http://www.omdbapi.com/?apikey=${process.env.OMDB_API}&t=${title}&y=${year}`,
  });

  return data;
}

/**
 *
 * @param {ImdbMovie} imdbMovie
 */
function renderMovie(imdbMovie) {
  const $content = $('.curtain__content');
  $content.find('.movieTitle').text(imdbMovie.Title);
  $content.find('.movieYear').text(imdbMovie.Year);
  $content.find('img').attr({
    src: imdbMovie.Poster,
    alt: imdbMovie.Title,
  });
  $content.find('.moviePlot').text(imdbMovie.Plot);
}

const app = {
  async init() {
    const movies = await getAllMovies();
    const $checkBox = $('.curtain__checkbox');

    $('.curtain__checkbox').on('click', async () => {
      const checked = $checkBox.prop('checked');
      if (!checked) {
        const randomMovie = getRandomMovie(movies);
        const imdbMovie = await getImdbMovieByTitleAndYear(
          randomMovie.title,
          randomMovie.year
        );
        renderMovie(imdbMovie);
      }
    });
  },
};

$(function () {
  app.init();
});
