const humans = [
  {
    firstName: 'John',
    lastName: 'Coltrane',
  },
  {
    firstName: 'Bill',
    lastName: 'Evans',
  },
  {
    firstName: 'Miles',
    lastName: 'Davis',
  },
  {
    firstName: 'Philly',
    lastName: 'Jones',
  },
];

// Array.forEach
humans.forEach((human) => {
  console.log(`${human.firstName} ${human.lastName}`);
});

// Array.map
const names = humans.map((human) => {
  return `${human.firstName} ${human.lastName}`;
});

console.log(names);

// Array.filter
const humansWithShortFirstName = humans.filter((human) => {
  return human.firstName.length < 5;
});

console.log(humansWithShortFirstName);
