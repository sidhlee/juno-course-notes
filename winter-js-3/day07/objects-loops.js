const book = {
  // object properties
  title: 'The Hobbit',
  author: 'J.R.R Tolkine',
  protagonist: 'Bilbo Baggins',
  antagonist: 'Smaug',
  location: 'Middle Earth',
  length: 304,
};

for (let bookInfo in book) {
  console.log(`${bookInfo}: ${book[bookInfo]}`);
}

const inventory = {
  apples: 2,
  oranges: 3,
  bananas: 6,
  milk: 2,
};

// 1.
let inventoryString = '';
for (let item in inventory) {
  inventoryString += `${inventory[item]} ${item} `;
}
console.log(`We have ${inventoryString}in stock.`);

// 2.0
for (item in inventory) {
  console.log(item);
}

const farm = {
  type: 'crop',
  name: 'Sweet Gardens',
  hectares: 300,
  employees: 3,
  owner: 2,
  barnCats: 14,
  location: {
    province: 'Ontario',
    city: 'Cambridge',
    postalCode: 'N1R5S2',
  },
  cropRotation: {
    field1: {
      crop: 'Winter Wheat',
      harvest: 'June',
      lastRotation: '2017',
    },
    field2: {
      crop: 'Corn',
      harvest: 'September',
      lastRotation: '2016',
    },
    field3: {
      crop: null,
      harvest: null,
      lastRotation: '2018',
    },
  },
};
// Level 1:
// using the objects above console log the following sentence:
// `Sweet Gardens is proud to have 300 hectares full of Winter Wheat and Corn this year! Stop by Cambridge, Ontario to visit our 14 barn cats and one of our 3 employees would be glad to help you!`

console.log(
  `Sweet Gardens is proud to have ${farm.hectares} hectares full of ${farm.cropRotation.field1.crop} and ${farm.cropRotation.field2.crop} this year! Stop by ${farm.location.city}, ${farm.location.province} to visit our ${farm.barnCats} barn cats and one of our ${farm.employees} employees would be glad to help you!`
);

// Level 2:
// iterate through the farm object, if the value is a number, then console.log the key and value pairs example: `There are 2 owner(s)`
for (farmInfo in farm) {
  if (typeof farm[farmInfo] === 'number') {
    if (farm[farmInfo] === 1) {
      console.log(`There is ${farm[farmInfo]} ${farmInfo}`);
    } else {
      console.log(`There are ${farm[farmInfo]} ${farmInfo}(s)`);
    }
  }
}

// Level 3:
// iterate through the farm object, and if there is a nested object, then iterate through that as well. You should console log each value in all objects.
function loopAndDigDeeper(objectOrPrimitive) {
  // if not object, stop.
  if (typeof objectOrPrimitive !== 'object') {
    return;
  } else {
    // if object, continue & loop
    const object = objectOrPrimitive;

    for (let key in object) {
      const value = object[key]; // get the value for the current key
      if (typeof value !== 'object') {
        // value is not an object, so log it!.
        console.log(objectOrPrimitive[key]);
      } else if (typeof value === 'object' && value === null) {
        // null is an object in JS 😞
        console.log('null'); // log out null explicitly.
      } else {
        // value is an object. Go deeper!
        loopAndDigDeeper(value);
      }
    }
  }
}

loopAndDigDeeper(farm);
