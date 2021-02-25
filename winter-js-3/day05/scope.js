// Global Scope
let artist = 'Bill Evans';

function band() {
  // Function Scope
  let leader = 'Miles Davis';
}

console.log(artist); // Bill Evans
console.log(leader); // ReferenceError: leader is not defined
