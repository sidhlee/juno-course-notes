const drinkObject = {
  coffee: {
    $: ['Dark Horse', 'Le Gourmand'],
    $$: ['Early Bird', 'Starbucks'],
  },
  tea: {
    $: ['Teavana', "McDonald's"],
    $$: ["David's Tea", 'Tealish'],
  },
};

const drinkChoice = 'coffee';
const priceChoice = '$$';

const {
  [drinkChoice]: { [priceChoice]: drinkArray },
} = drinkObject;

console.log(drinkArray); // ['Early Bird', 'Starbucks']
