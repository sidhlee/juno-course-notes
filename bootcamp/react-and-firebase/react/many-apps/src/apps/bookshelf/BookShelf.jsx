import './bookshelf-styles.scss';
import { useEffect, useState } from 'react';
import Book from './Book';

const BookShelf = () => {
  const initialBestSellerData = {
    bestsellers_date: '',
    books: [],
    display_name: '',
  };
  const [bestSellerData, setBestSellerData] = useState(initialBestSellerData);
  const [finishedBooks, setFinishedBooks] = useState([]);

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_TIMES_API}
`)
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        const {
          results: { bestsellers_date, books, display_name },
        } = responseJSON;
        setBestSellerData({
          bestsellers_date,
          books,
          display_name,
        });
      });
  }, []);

  const toggleBookRead = (bookTitle) => {
    if (finishedBooks.includes(bookTitle)) {
      const removedList = finishedBooks.filter(
        (finishedBook) => finishedBook !== bookTitle
      );
      setFinishedBooks(removedList);
    } else {
      setFinishedBooks([...finishedBooks, bookTitle]);
    }
  };

  const { display_name, bestsellers_date, books } = bestSellerData;
  return (
    <div className="bookShelf">
      <h2>{display_name}</h2>
      <p className="bestsellerDate">{bestsellers_date}</p>
      <ul className="bookList">
        {books.map(
          ({
            title,
            author,
            rank,
            rank_last_week,
            description,
            book_image,
          }) => {
            const haveRead = finishedBooks.includes(title);

            return (
              <Book
                key={title}
                title={title}
                author={author}
                rank={rank}
                rankLastWeek={rank_last_week}
                description={description}
                imageURL={book_image}
                toggleRead={() => toggleBookRead(title)}
                haveRead={haveRead}
              />
            );
          }
        )}
      </ul>
    </div>
  );
};

export default BookShelf;
