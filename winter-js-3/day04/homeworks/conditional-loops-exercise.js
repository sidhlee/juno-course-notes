// Let's start by assigning a boolean to a variable called `hungry`. We can arbitrarily assign it a value of true for now. Because this variable is a boolean let's assume that it's probably going to change at some point in our application.
let hungry = true;

// Now let's assign a number to a variable called slicesOfPizza. Again, the number doesn't matter right now, but let's assign 8 slices for now. Assume that this number will change at some point, so consider that when writing your variable assignment. After you've declared your variable, console.log a string that announces how many slices of pizza you have using that variable. You can use string concatenation or template literals.
let slicesOfPizza = 8;
const showPizza = () => console.log(`I have ${slicesOfPizza} slices of pizza.`);

// Now we're going to write a conditional statement that subtracts one slice of pizza from your slicesOfPizza and console.logs out the new number of slices, but only if hungry is true.
if (hungry) {
  slicesOfPizza--;
  showPizza();
} else {
  showPizza();
}

// Include an else statement in your conditional that logs a different string of how many slices of pizza you have if your hungry variable is false. Try switching hungry variable back and forth to make sure that both of your conditionals are executing properly.

// Okay! It's time, let's write our own loop! Start by writing the skeleton of a for loop that logs the numbers between 0-20 in the console.
// Now let's log out a string that says either "1 is odd" or "2 is even" for every number in the loop. Use a conditional statement to specify which string you want to print to the console.
for (let i = 0; i < 21; i++) {
  console.log(`${i} is ${i % 2 === 0 ? 'even' : 'odd'}`);
}

// Cool! Now let's practice our multiplication tables. Write a for loop that uses the variable multiplier to calculate the value of multiplier times every number between 0 - 10, and prints each calculation as a string to the console. e.g. "9 x 8 = 72"

for (let multiplier = 0; multiplier < 11; multiplier++) {
  for (let i = 0; i < 11; i++) {
    console.log(`${multiplier} x ${i} = ${multiplier * i}`);
  }
}

// Great job! Now as an extra challenge, see if you can nest that loop inside of another loop that starts multiplier at 0 and increases it by one after each iteration, and have it print the entire multiplication table from 0 -10; eg. "9 x 9 = 81" "9 x 10 = 90" "10 x 0 = 0" etc.

// Let's declare a new variable called seconds and we'll give it a value of 10;

// Below you'll see something called a setInterval function. Don't worry too much about all the crazy brackets and numbers for now. Just know what it does - it performs code we put inside of it repeatedly at a set interval (hence the name!). The interval we've set is 1000 milliseconds, so whatever code we put inside here, will execute every second. If it helps, just think of it as a prebuilt loop!

// Inside the setInterval function, reassign the value of seconds so that it will decrease by 1 every second. If you want to make it look cleaner, look up the console method that clears the console and have the console cleared and the new value of second rewritten to the console every second.

// Now write a conditional statement that says that when the number reaches 0, the user receives an alert that tells them that the time is up.

// You'll notice that once the timer starts to go below zero it starts to print nonsense. Write another conditional statement that stops the timers at 0.

// BONUS: See if you can alter your code so that it specifies that the number will be displayed as a two digit number, even when it is lower than 10. You may need to make sure to adjust your conditional statement as well. HINT: You may have some trouble with types in this problem. Try googling how to convert between numbers and strings and see if you can conquer this challenge!

let seconds = 10; // setting the seconds variable to the number 10

const id = setInterval(() => {
  if (seconds === 0) {
    alert('The time is up');
    clearTimeout(id);
  }
  seconds--;
  // put your code in here!
  console.clear();
  console.log(seconds.toString().padStart(2, '0'));
}, 1000); // end of setInterval
