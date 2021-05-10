import './styles.scss';

const Animal = ({ animal }) => {
  const { name, age, species, gender, picture } = animal;
  return (
    <li className="animal-card card" draggable>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Species: {species}</p>
      <p>Gender: {gender}</p>
      <img src={picture} alt={name} />
    </li>
  );
};

export default Animal;
