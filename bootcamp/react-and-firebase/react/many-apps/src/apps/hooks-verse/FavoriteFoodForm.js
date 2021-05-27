import { useState } from 'react';

const FavoriteFoodForm = () => {
  const [favFood, setFavFood] = useState('');

  const handleChange = (e) => {
    setFavFood(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit logic here
    // reset form on submit
    setFavFood('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="favFood">What is your favorite food?</label>
      <input id="favFood" type="text" value={favFood} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FavoriteFoodForm;
