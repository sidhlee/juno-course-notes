const learningOutcomes = {
  one() {
    //For the following, what do you expect to be printed to the console?
    let counter = 10;
    let clock = setInterval(function () {
      console.log(`Count down: ${counter}`);
      counter--;
      // this is checked before calling another clock fn
      if (counter == 0) {
        console.log('OUT OF TIME!');
        clearInterval(clock);
      }
    }, 1000);
    /*
    Count down: 10
    Count down: 9
    ...
    Count down: 1
    OUT OF TIME!  
    */
  },
};

// For the exercises below, try writing some pseudo-code to help you break down the tasks more if needed.
function variableOperatorsFunctions() {
  // EXERCISE 1
  // 1. Prompt the user for their age.
  // 2. Store the answer and convert their age into dog years by multiplying their age by 7.
  // 3. Console log the string: If you were a dog you'd be --- years old.
  function exerciseOne() {
    const humanAge = prompt('What is your age?');
    const dogAge = humanAge * 7;
    console.log(`If you were a dog you'd be ${dogAge} years old.`);
  }

  //EXERCISE 2
  // 1. Create a variable that stores the price for an item in your store.
  // 2. Prompt the user for the quantity of that item they would like to purchase.
  // 3. Calculate the tax on the purchase (13%).
  // 4. Console log the string: The total cost of your purchase is $---
  // Bonus points if you can get it to show 2 decimals. (Google it!)
  function exerciseTwo() {
    const price = 5.99;
    const quantity = prompt('How many items would you like to purchase?');
    const afterTax = price * quantity * 1.13;
    console.log(`The total cost of your purchase is $${afterTax.toFixed(2)}`);
  }

  // EXERCISE 3
  //1. Create 3 variables that store user inputted numbers from a prompt.
  //2. Use a built in JavaScript function to find the maximum of the three variables.
  //3. Log the answer into the console using the sentence: The maximum number is --.
  function exerciseThree() {
    const firstNumber = prompt('Enter the first number.');
    const secondNumber = prompt('Enter the second number.');
    const thirdNumber = prompt('Enter the third number.');
    const max = Math.max(firstNumber, secondNumber, thirdNumber);
    console.log(`The maximum number is ${max}`);
  }

  // EXERCISE 4
  // 1. Prompt the user for their name.
  // 2. Use a built in function to convert their name to lowercase characters and store it in a new variable.
  // 3. Use a built in function to convert their name to uppercase characters and store it in a new variable.
  // 4. Console log both strings in the same line.
  // Hint: Look into JavaScript String Methods
  function exerciseFour() {
    const name = prompt('What is your name?');
    const lowercaseName = name.toLowerCase();
    const uppercaseName = name.toUpperCase();
    console.log(lowercaseName, uppercaseName);
  }

  // EXERCISE 5
  // 1. Write some code that mimics a dice roll (a random number between 1-6)
  // 2. Console log the sentence: You rolled a ----!
  // Hint look into Math.random and Math.floor
  // Bonus points if you write a function to call from the console so you can roll the dice multiple times without refreshing the page.
  function exerciseFive() {
    const randomNumberFromOneToSix = Math.floor(Math.random() * 6) + 1;
    console.log(`You rolled a ${randomNumberFromOneToSix}`);
  }
}

function scope() {
  /* 1. Add ONE line to the following code that will change the output from: 
          'Here I go petting Dug again' to: 'Here I go petting Korg again'.
          */
  let petName = 'Dug';
  function petAnimal() {
    petName = 'Korg';
    console.log(`Here I go petting ${petName} again`);
  }

  petAnimal();

  /* 2. Remove ONE word that will make the following print out 'My best friend is Meek': */

  function nameMyBestFriend() {
    let myBestFriend = 'Korg';
    {
      /*let*/ myBestFriend = 'Meek';
    }

    console.log(`My best friend is: ${myBestFriend}`);
  }

  nameMyBestFriend();
}

/* 3. CHALLENGE:
   
  The following should *not* be changed:
    1. The ORDER in which the numbers are declared (must remain in the order of 6, 7, 8 from top to bottom).
    2. The location of the LAST console.log (can not move this console.log earlier).
    3. The VALUES of the declaration.
  
  The following *can* be changed:
    1. The location of the console.logs that are NOT the last console.log. 
    2. The way in which the variables are declared. 

  let a = 6;

  function fun() {
    let a = 7;
    function again() {
      let a = 8;
      console.log(a);
    } // end again

    again();
    console.log(a);
  } // end fun

  fun();

  console.log(a);

  Currently what prints to the console:
  8
  7
  6

  Desired end goal for what prints to the console:
  6 
  7 
  8
*/

let a = 6;
console.log(a);

function fun() {
  a = 7;
  console.log(a);
  function again() {
    a = 8;
  } // end again

  again();
} // end fun

fun();

console.log(a);
