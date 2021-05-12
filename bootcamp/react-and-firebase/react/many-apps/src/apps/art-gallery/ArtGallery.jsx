import { useEffect, useState } from 'react';
import Art from './Art';
import './art-gallery-styles.scss';

const ArtGallery = () => {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    const url = new URL('https://www.rijksmuseum.nl/api/en/collection');
    url.search = new URLSearchParams({
      key: 'T26u8T26', // Brent's key
      format: 'json',
      q: 'sheep',
      culture: 'en',
      imgonly: true,
    });
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        // massaging the data
        const arts = data.artObjects.map(
          ({ id, title, longTitle, webImage: { url } }) => ({
            id,
            altText: `The piece of art titled ${title}`,
            title: longTitle,
            imagePath: url,
          })
        );
        setArts(arts);
      });
  }, []);

  return (
    <div className="ArtGallery">
      <header>
        <h1>ArtGallery</h1>
      </header>
      <section>
        {/* Display many art pieces... */}
        {arts.map((art) => {
          return (
            <Art
              key={art.id}
              title={art.title}
              imgSrc={art.imagePath}
              altText={art.artText}
            />
          );
        })}
      </section>
    </div>
  );
};

export default ArtGallery;
