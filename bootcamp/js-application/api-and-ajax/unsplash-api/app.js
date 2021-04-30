import process from '../../../../env.js';
import data from './data.js';

const baseURL = `https://api.unsplash.com/`;
const listPhotosRoute = `/photos`;
const photoURL = `${baseURL}${listPhotosRoute}`;

// define a name space
const photosApp = {};

// get data
photosApp.getPhotos = () => {
  const url = new URL(photoURL);
  url.search = new URLSearchParams({
    client_id: process.env.UNSPLASH_API,
  });

  // fetch(url)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //
  //   });

  return Promise.resolve().then(() => {
    // transform data
    // render items into page
    photosApp.displayPhotos(data);

    return data;
  });
};

photosApp.displayPhotos = (photosData) => {
  photosData.forEach((photo) => {
    // declare some selectors
    const gallery = document.querySelector('.gallery');
    const listElement = document.createElement('li');

    // create a list item
    const image = document.createElement('img');
    image.src = photo.urls.regular;
    listElement.append(image);

    // add item to gallery
    gallery.append(listElement);
  });
};

// create init function

photosApp.init = () => {
  console.log('init');

  photosApp.getPhotos();
};

photosApp.init();
