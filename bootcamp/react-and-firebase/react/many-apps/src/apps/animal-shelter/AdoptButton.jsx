const AdoptButton = () => {
  const handleButtonClick = () => {
    console.log('click');
  };
  return (
    <button className="btn" onClick={handleButtonClick}>
      Adopt me!
    </button>
  );
};

export default AdoptButton;
