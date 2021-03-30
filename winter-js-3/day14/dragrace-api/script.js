/**
 * @typedef {{
 * id: number,
 * place: number,
 * seasonNumber: string
 * }} Season
 */

/**
 * @typedef {{
 * id: number,
 * image_url: string,
 * missCongeniality: boolean,
 * name: string,
 * quote: string,
 * seasons: Season[],
 * winner: boolean
 * }} Queen
 */

const $select = $('select');
const $queenContainer = $('.queen-container');

/**
 * Get all queens that appeared in a season based on the season ID.
 * @param {number} season
 * @returns {Queen[]}
 */
async function getQueensBySeasonId(seasonId) {
  const queens = await $.ajax({
    url: `http://www.nokeynoshade.party/api/seasons/${seasonId}/queens`,
  });
  return queens;
}

async function handleSelectChange() {
  const season = $(this).val();
  const queens = await getQueensBySeasonId(+season);
  renderQueens(queens);
}

/**
 * Display cards with queen photo and info onto screen
 * @param {Queen[]} queens
 */
function renderQueens(queens) {
  const queenMarkups = queens.map((queen) => {
    // If quote is not available, show nothing instead of empty double quotation mark.
    const quote = queen.quote === '""' ? '' : `${queen.quote}`;

    return `
      <div class="queen-card slide-up">
        <div class="image-container">
          <img src="${queen.image_url}" alt="${
      queen.name
    }" class="queen-image"/>
        </div>
        <div class="card-body">
          <h3>${queen.name}</h3>
          ${quote ? `<p class="quote"><q>${quote}</q></p>` : ''}
        </div>
      </div>
    `;
  });

  $queenContainer.html(queenMarkups.join(''));
}

const app = {
  async init() {
    // display queens in season 1 on initial page load
    const seasonOneQueens = await getQueensBySeasonId(1);
    renderQueens(seasonOneQueens);

    $select.on('change', handleSelectChange);
  },
};

$(function () {
  app.init();
});
