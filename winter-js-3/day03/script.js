console.log('Banana' * 75); // NaN
console.log(400 / true); // 400 (true coerced into 1)
console.log(400 / false); // Infinity
console.log(400 / 'true'); // NaN
console.log('B4' + 4); // B44 (concatenation)

console.log(3 != '3'); // false
console.log(3 !== '3'); // true

let age = 13;
let loggedIn = true;

// check whether the user is 14 or over *and* is logged in
console.log(age >= 14 && loggedIn === true);
