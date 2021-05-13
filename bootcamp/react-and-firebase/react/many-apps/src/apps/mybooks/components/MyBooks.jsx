import '../styles/mybooks-styles.scss';
import firebase from '../config/firebase.js';
import { useEffect, useState } from 'react';
import BooksContainer from './BooksContainer';

const MyBooks = () => {
  const [books, setBooks] = useState([]);
  const [bookTitleInput, setBookTitleInput] = useState('');

  useEffect(() => {
    console.log('[MyBooks] mount');

    const dbRef = firebase.database().ref();

    dbRef.on('value', (dataSnapshot) => {
      const data = dataSnapshot.val();
      const booksFromDb = Object.entries(data).map(([key, book]) => ({
        key,
        title: book,
      }));
      setBooks(booksFromDb);
    });
  }, []);

  const handleBookTitleInputChange = (e) => {
    setBookTitleInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const dbRef = firebase.database().ref();
    dbRef.push(bookTitleInput);
    setBookTitleInput('');
  };

  const removeBook = (bookKey) => {
    const bookRef = firebase.database().ref(bookKey);
    bookRef.remove();
  };

  return (
    <div className={'MyBooks'}>
      <h1>MyBooks</h1>

      <BooksContainer books={books} removeBook={removeBook} />
      <form className="inputFormContainer" onSubmit={handleFormSubmit}>
        <label htmlFor="bookTitleInput">Add a new book to your bookshelf</label>
        <input
          id="bookTitleInput"
          type="text"
          autoComplete="off"
          value={bookTitleInput}
          onChange={handleBookTitleInputChange}
        />
        <button className="button submit" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default MyBooks;
