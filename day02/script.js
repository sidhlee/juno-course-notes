console.log(typeof null); // "object"
console.log(typeof undefined); // "undefined"

// Using variables as values

// declare a variable of age and assign it a value
let age = 32;

// declare a variable which represents the number of days I have lived according to my age.
const daysIHaveLivedThusFat = 365 * age;

console.log(daysIHaveLivedThusFat);

// How many seconds are in a year?
const second = 1;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const year = 365 * day;
console.log(year); // 31536000

// If a tube of cookie dough makes 12 cookies,
// but you eat a quarter of the raw dough before you get them in the oven,
// how many cookies can you bake?
const cookie = 1;
const tubeOfDough = 12 * cookie;
const cookiesConsumed = 0.25 * tubeOfDough;
const bakedCookies = tubeOfDough - cookiesConsumed;
console.log({ bakedCookies }); // 9
