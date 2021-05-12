const Book = ({
  imageURL,
  title,
  rank,
  rank_last_week,
  author,
  description,
  toggleRead,
  haveRead,
}) => {
  return (
    <li className={`book ${haveRead ? 'finished' : null}`} onClick={toggleRead}>
      <div className="bookTop">
        <div className="bookImage">
          <img src={imageURL} alt={title} />
        </div>
        <button className="btn">{haveRead ? 'Unmark' : 'Mark Read'}</button>
        <div className="rank">
          <span>Rank: {rank}</span>
          <span>Lastweek: {rank_last_week}</span>
        </div>
      </div>
      <div className="bookInfo">
        <h3 className="title">{title}</h3>
        <div className="author">
          <span>{author}</span>
        </div>
        <p className="description">{description}</p>
      </div>
    </li>
  );
};

export default Book;
