import TeamSlider from './TeamSlider';
import './HooksVerse.scss';

const { default: FavoriteBookForm } = require('./FavoriteBookForm');
const { default: FavoriteFoodForm } = require('./FavoriteFoodForm');
const { default: FavoriteFriendForm } = require('./FavoriteFriendForm');

const HooksVerse = () => {
  return (
    <div className="HooksVerse">
      <h2>Into the Hooks Verse</h2>
      <FavoriteFoodForm />
      <FavoriteBookForm />
      <FavoriteFriendForm />
      <TeamSlider>
        {/* Elements defined inside a component like this will be available as a `prop` called `children` in the `TeamSlider` component. They will be stored as an array since there are multiple elements. */}
        <img
          src="https://placekitten.com/500/500"
          alt="Our Customeowr Service Team"
        />
        <img src="https://placebear.com/500/500" alt="Chief of Obearations" />
        <img src="https://placekeanu.com/500/500" alt="Chief Reevenu Officer" />
      </TeamSlider>
    </div>
  );
};

export default HooksVerse;
