// Write a function `charIsVowel()` that takes a character (i.e. a string of length 1) as argument and returns true if it is a vowel, false otherwise. E.g. `charIsVowel("b")` returns `false`.
function charIsVowel(char) {
  return /[aeiou]/i.test(char);
}

// once done, create separate if statements for the following and log "yes it is a vowel / no it isn't a vowel":

// Check if capital A is a vowel
if (charIsVowel('A')) {
  console.log('yes it is a vowel');
} else {
  console.log("no it isn't a vowel");
}
// check if c isn't s vowel
if (charIsVowel('c')) {
  console.log('yes it is a vowel');
} else {
  console.log("no it isn't a vowel");
}
// check if lowercase e AND uppercase O is a vowel
if (charIsVowel('e') && charIsVowel('O')) {
  console.log('yes it is a vowel');
} else {
  console.log("no it isn't a vowel");
}

// check if either x or u is a vowel
if (charIsVowel('x') || charIsVowel('u')) {
  console.log('yes it is a vowel');
} else {
  console.log("no it isn't a vowel");
}

// check that h isn't a vowel and e is a vowel
if (!charIsVowel('h') && charIsVowel('e')) {
  console.log('yes it is a vowel');
} else {
  console.log("no it isn't a vowel");
}
