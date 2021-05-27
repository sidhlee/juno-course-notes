import useListItemsSwitcher from './useListItemSwitcher';

function TeamSlider({ children }) {
  const [currentTeamMember, previousFrame, nextFrame] =
    useListItemsSwitcher(children);

  return (
    <>
      {currentTeamMember}
      <nav>
        <button onClick={previousFrame}>Previous</button>
        <button onClick={nextFrame}>Next</button>
      </nav>
    </>
  );
}

export default TeamSlider;
