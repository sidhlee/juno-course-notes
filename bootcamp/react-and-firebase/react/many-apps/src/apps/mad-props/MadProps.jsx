import TikTokUser from './TikTokUser';

const MadProps = () => {
  const tikTokUsers = [
    'Anthony Hopkins',
    'Hunter Schaffer',
    'Charlie Puth',
    'Will Ferrell',
    'William Hung',
  ];

  const followUser = (user) => {
    alert(`You are now following this ${user}!`);
  };

  return (
    <div>
      <h1>Welcome to the TikToks</h1>
      {tikTokUsers.map((user) => (
        <TikTokUser
          key={user}
          username={user}
          handleClick={() => {
            followUser(user);
          }}
        />
      ))}
    </div>
  );
};

export default MadProps;
