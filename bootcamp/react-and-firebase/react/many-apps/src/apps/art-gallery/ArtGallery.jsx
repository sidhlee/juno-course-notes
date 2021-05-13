import { useEffect, useState } from 'react';
import Art from './Art';
import './art-gallery-styles.scss';

const ArtGallery = () => {
  const [arts, setArts] = useState([]);

  const [sort, setSort] = useState('');

  useEffect(() => {
    const url = new URL('https://www.rijksmuseum.nl/api/en/collection');
    const searchParams = new URLSearchParams({
      key: 'T26u8T26', // Brent's key
      format: 'json',
      imgonly: true,
    });

    // Only include params when we're using it.
    if (sort) {
      searchParams.append('s', sort);
    }

    url.search = searchParams;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

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
  }, [sort]);

  const handleSortByArtistClick = () => {
    setSort('artist');
  };

  const handleSortChronoClick = () => {
    setSort('chronologic');
  };

  return (
    <div className="ArtGallery">
      <header>
        <h1>ArtGallery</h1>
        <div className="controls">
          <button onClick={handleSortByArtistClick}>Sort by Artist</button>
          <button onClick={handleSortChronoClick}>Sort Chronologically</button>
          {sort ? `Sorting by: ${sort}` : ''}
        </div>
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
