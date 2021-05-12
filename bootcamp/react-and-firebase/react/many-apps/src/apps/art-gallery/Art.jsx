const Art = ({ title, imgSrc, altText }) => {
  return (
    <div className="Art">
      <h2>{title}</h2>
      <img src={imgSrc} alt={altText} />
    </div>
  );
};

export default Art;
