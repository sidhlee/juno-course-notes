// Okay! Okay! Okay! Let's get started with some of the FUN-damentals!

// Exercise 1.
// 1. Create a variable called zooAnimal and have it hold a string that says hippopotamus. Consider that this variable is always going to be hippopotamus.
const zooAnimal = 'hippopotamus';
// 2. Create a variable called numberOfAnimals that will hold a number of 7.
const numberOfAnimals = 7;
// 3. Now use string concatenation and both of the variables to log the sentence "The zoo has 7 hippopotamus." to the console.
console.log('The zoo has ' + numberOfAnimals + ' ' + zooAnimal + '.');
// 4. String concatenation can be pretty cumbersome sometimes. Rewrite the console.log but this time using template literals.
console.log(`The zoo has ${numberOfAnimals} ${zooAnimal}.`);

//Exercise 2.
// 1. Let's make a new variable called playerOne. playerOne will always be named MegaMan which will be a string.
const playerOne = 'MegaMan';
// 2. Now we'll create a variable called health. As you can imagine, health is going to change, but we'll give it a starting value of 100 as a number.
let health = 100;
// 3. We'll create a constant variable called damage and give a numeric value of 20.
const damage = 20;
// 4. Lastly we can create a boolean variable called hit, which can be given the value of true.
let hit = true;
// 5. Now for the fun part! Using string concatenation, console.log a string that says "MegaMan's health is at 100!"
console.log(playerOne + "'s health is at " + health + '!');
// 6. Now log a string using template literals that says "MegaMan has been hit! Their health has gone from 100 to 80."
if (hit === true) {
  console.log(
    `${playerOne} has been hit! Their health has gone from ${health} to ${
      health - damage
    }.`
  );
}
// 7. And lastly, wrap the last console.log in an if statement that specifies that this string will only log when hit is equal to true. Test to see if it works by changing the value of hit to false and back to true again. The string should only log when the value is true.

// BONUS: Exercise 3.
// 1. Write a num variable and store any number you want in it. I'm going to use 64.
let num = 64;
// 2. Look up the JavaScript Math object and see if you can use it to store the square root of 64.
let sqrtNum = Math.sqrt(num);
// 3. Console.log the stored value.
console.log(sqrtNum);
// 4. Below that, using the Math object again, change the value of the num variable to equal a random integer between 0 - 100. This one might take a little mental math to complete. When you think you've got it, console.log num.
num = Math.round(Math.random() * 100);
console.log(num);
// 5. And lastly, let's console.log the squareRoot of num again, this time after we've changed the value of the num variable. What do we see? Is it the squareRoot of the new random number we've assigned to num?
console.log(sqrtNum);
// 6. We might not have gotten what we expected in the previous step. This is because at the time the squareRoot variable is assigned, the value of num is 64. In order to get the square root of the random number, we need to reassign the value of the squareRoot variable below our reassignment of num.
sqrtNum = Math.sqrt(num);
console.log(sqrtNum);
