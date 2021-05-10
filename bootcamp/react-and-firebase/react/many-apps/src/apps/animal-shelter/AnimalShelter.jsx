import React from 'react';
import animals from './animals.js';
import Animal from './Animal';
import Header from './Header';
import AdoptButton from './AdoptButton';
import Gallery from './Gallery.jsx';

const AnimalShelter = () => {
  const animalCards = animals.map((animal, i) => (
    <Animal key={i} animal={animal} />
  ));

  return (
    <div className="AnimalShelter">
      <Header />
      <ul className="animals">{animalCards}</ul>
      <Gallery />
      <AdoptButton />
    </div>
  );
};

export default AnimalShelter;
