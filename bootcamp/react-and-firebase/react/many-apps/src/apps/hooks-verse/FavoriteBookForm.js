import useInputValue from './useInputValue';

const FavoriteBookForm = () => {
  // const [favBook, setFavBook] = useState('');
  const [favBook, handleChange, clearInput] = useInputValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit logic here
    // reset form on submit
    clearInput();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="favBook">What is your favorite book?</label>
      <input id="favBook" type="text" value={favBook} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FavoriteBookForm;
