import {
  durstenfeldShuffle,
  fisherYatesShuffle,
  naiveShuffle,
} from './shuffle.js';

const arr = [1, 2, 3, 4, 5];

function testShuffle(shuffleFn, testArray) {
  const result = testArray.reduce((obj, elem) => {
    obj[elem] = 0;
    return obj;
  }, {});

  // count each element where it is shuffled to the beginning of the array
  for (let i = 0; i < testArray.length ** 2; i++) {
    const shuffledArray = shuffleFn(testArray);
    const [firstElem, ...rest] = shuffledArray;
    result[firstElem]++;
  }

  return result;
}

const durstenfeld = testShuffle(durstenfeldShuffle, arr);
const fisherYates = testShuffle(fisherYatesShuffle, arr);
const naive = testShuffle(naiveShuffle, arr);

console.log({
  durstenfeld,
  fisherYates,
  naive,
});
