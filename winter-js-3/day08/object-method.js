const state = {
  user: 'John',
  token: 'kjnadc874424',
  isLoggedIn: true,
  numbers: [1, 2, 3],
};

const newState = Object.assign(state, {
  numbers: [4, 5, 6],
  isLoggedIn: false,
});
console.log(newState);
console.log(state);
console.log(newState === state);

/**
 * Array methods
 */
const movies = ['A New Hope', 'Empire Strikes Back', 'Return of the Jedi'];

const lengthAfterUnshift = movies.unshift('Jurassic Park');
movies; // ["Jurassic Park", "A New Hope", "Empire Strikes Back", "Return of the Jedi"]
lengthAfterUnshift; // 4

const lengthAfterPush = movies.push('Fight Club');
movies; // // ["Jurassic Park", "A New Hope", "Empire Strikes Back", "Return of the Jedi", "Fight Club"]
lengthAfterPush; // 5

const firstItem = movies.shift();
movies; // [ "A New Hope", "Empire Strikes Back", "Return of the Jedi", "Fight Club" ]
firstItem; // Jurassic Part

const lastItem = movies.pop();
movies; //  <div ,=""></div>
lastItem; // Fight Club
