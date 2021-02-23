// Level 2: Log into the console the numbers between 1 and 10 in reverse (i.e. starting with 10). The output should look something like this:
for (let i = 10; i > 0; i--) {
  console.log(i);
}

// Level 3: Print the even numbers between 1 and 20. The output should look something like this
for (let i = 2; i < 21; i += 2) {
  console.log(i);
}

// Level 4: Print the numbers from 1 to 100, but for multiples of 3 print “Fizz” instead of the number, and for the multiples of five print “Buzz”. For numbers which are multiples of both 3 and 5, print “FizzBuzz”. The output should look something like this:
for (let i = 1; i < 101; i++) {
  const multipleOfThree = i % 3 === 0;
  const multipleOfFive = i % 5 === 0;
  if (multipleOfThree && !multipleOfFive) {
    console.log('Fizz');
  } else if (!multipleOfThree && multipleOfFive) {
    console.log('Buzz');
  } else if (multipleOfThree && multipleOfFive) {
    console.log('FizzBuzz');
  } else {
    console.log(i);
  }
}

// Simpler by removing the intersection first!
// (But this becomes order-dependent and can be a future foot-gun)
for (let i = 1; i < 101; i++) {
  const multipleOfThree = i % 3 === 0;
  const multipleOfFive = i % 5 === 0;
  if (multipleOfThree && multipleOfFive) {
    console.log('Fizz');
  } else if (multipleOfThree) {
    console.log('Buzz');
  } else if (multipleOfFive) {
    console.log('FizzBuzz');
  } else {
    console.log(i);
  }
}
