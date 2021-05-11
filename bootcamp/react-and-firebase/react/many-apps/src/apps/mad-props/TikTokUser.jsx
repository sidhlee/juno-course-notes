const TikTokUser = (props) => {
  return (
    <div>
      <h2>This is {props.username}'s TikTok account</h2>
      <button onClick={props.handleClick}>Follow this user!</button>
    </div>
  );
};

export default TikTokUser;
