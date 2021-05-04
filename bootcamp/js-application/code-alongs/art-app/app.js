import process from '../../../../env.js';

console.log(process);

const app = {};

app.apiKey = process.env.RIJKS_API;

app.init = async () => {
  console.log('app has been initialized');
  app.cacheElements();
  app.attachEventListeners();

  const arts = await app.getArts('monkey');
  app.displayArt(arts);
};

app.getArts = async (query) => {
  const url = new URL(`https://www.rijksmuseum.nl/api/nl/collection`);
  url.search = new URLSearchParams({
    key: app.apiKey,
    culture: 'en',
    q: query,
    ps: 20,
    imgonly: true,
  });

  return fetch(url)
    .then((response) => response.json())
    .then((responseJSON) => {
      const { artObjects } = responseJSON;
      return (app.arts = artObjects);
    });
};

app.displayArt = (artArray) => {
  console.log(artArray);
  const pieces = artArray.map((art) => {
    const src = art.webImage.url;
    const alt = art.title;
    const artist = art.longTitle.split(',')[1].trim();

    const li = document.createElement('li');
    li.classList.add('piece');

    const h2 = document.createElement('h2');
    h2.textContent = alt;

    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;

    const p = document.createElement('p');
    p.textContent = artist;

    li.append(h2);
    li.append(img);
    li.append(p);

    return li;
  });

  const container = document.getElementById('artwork');

  container.replaceChildren();

  pieces.forEach((piece) => {
    container.append(piece);
  });
};

app.cacheElements = () => {
  app.galleryContainer = document.getElementById('artwork');
  app.creatureDropdown = document.getElementById('creatures');
  app.creatureText = document.getElementById('creature-text');
};

app.attachEventListeners = () => {
  app.creatureDropdown.addEventListener('change', async (event) => {
    const creature = event.target.value;
    const newArts = await app.getArts(creature);
    app.updateTitleText(creature);
    app.displayArt(newArts);
  });
};

app.updateTitleText = (creature) => {
  app.creatureText.textContent = creature;
};

app.init();
