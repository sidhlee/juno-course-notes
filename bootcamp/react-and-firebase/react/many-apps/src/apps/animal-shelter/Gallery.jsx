let i = 0;

const GalleryItem = () => {
  i += 1;
  const src = `http://placekitten.com/${300 + i}/${300 + i}`;

  const handleItemClick = () => {
    alert(src);
  };

  return (
    <li>
      <img src={src} alt="random cat" onClick={handleItemClick} />
    </li>
  );
};

const Gallery = () => {
  return (
    <ul className="gallery">
      {[...Array(20)].map((_, i) => (
        <GalleryItem key={i} />
      ))}
    </ul>
  );
};

export default Gallery;
