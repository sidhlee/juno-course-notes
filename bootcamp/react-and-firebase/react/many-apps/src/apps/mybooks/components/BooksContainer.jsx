const BooksContainer = ({ books, removeBook }) => {
  return (
    <ul className="booksContainer">
      {books.map((book) => (
        <li className="book" key={book.key}>
          <p>Title: {book.title}</p>
          <button
            className="button remove"
            onClick={() => removeBook(book.key)}
          >
            Remove Book
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BooksContainer;
