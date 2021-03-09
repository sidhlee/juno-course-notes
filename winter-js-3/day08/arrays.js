const cheese = [
  'Blue Cheese',
  'Manchego',
  'Provolone',
  'Cheddar',
  'Colby',
  'Feta',
  'Goat Cheese',
  'Gorgonzola',
  'Romano',
  'Limburger',
  'Brie',
  'Ricota',
  'Roquefort',
  'Smoked Gouda',
];

// First log the entire array
console.log(cheese);

for (let item of cheese) {
  console.log(item);
}

// Log "There are __ Cheeses"
console.log(`There are ${cheese.length} Cheese`);

// figure out what the index of "Limburger" is
// store this information in a variable
const index = cheese.indexOf('Limburger');
index;

// Use the previous variable to log the word "Limburger"
console.log(cheese[index]);

// Remove "Smoked Gouda" from the array and log cheese again
cheese.pop();
console.log(cheese);
// Remove "Blue Cheese" from the array and log cheese again

cheese.shift();
console.log(cheese);

// rearrange the array to be alphabetical and then log cheese again
cheese.sort();
cheese;

// rearrange the array to be reverse alphabetical order and then log cheese again
cheese.reverse();
console.log(cheese);

// Add the following cheeses to the end of the array and then log cheese again: "Camembert" and "Muenster"
cheese.push('Camembert', 'Muenster');
cheese;

// add "Port de Salut" to the front of the array and then log the array
cheese.unshift('Port de Salut');

// Create a brand new array with the following types of bread and then log it
// "Rye", "Whole Wheat", "White"
const bread = ['Rye', 'Whole Wheat', 'White'];

// Create a brand new array for selected cheeses from cheeses 4 through 6(including 6) and then log it
const selectCheese = cheese.slice(4, 7);
console.log(selectCheese);

// Create a final new array for grilled cheese that combines the 3 breads and 3 selected cheeses. Then log it.
let grilledCheese = bread.concat(selectCheese);
console.log(grilledCheese);

// Convert your grilled cheese into a stringCheese variable. Separate each item with a dash. Log it
let stringCheese = grilledCheese.join('-');
console.log(stringCheese);

// You received this string, convert it to an array and log the 2nd and 4th items _without_ removing them from the array
const items = 'pickles,olives,spicy beans,clamato,japalenos,bacon';
const splitted = items.split(',');
console.log(splitted);
console.log(splitted[1]);
console.log(splitted[3]);
