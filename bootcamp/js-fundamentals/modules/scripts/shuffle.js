export function naiveShuffle(arr) {
  const clonedArr = [...arr];
  return clonedArr.sort((a, b) => Math.random() - 0.5);
}

export function fisherYatesShuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
export function durstenfeldShuffle(array) {
  const clonedArray = [...array];
  for (var i = clonedArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = clonedArray[i];
    clonedArray[i] = clonedArray[j];
    clonedArray[j] = temp;
  }
  return clonedArray;
}
