// create a function called tipCalculator that uses three parameters: meal price, Tax Rate, Tip Rate
// the function should return a value representing the total bill
// have the function default to 13% tax and 15% tip
// console.log() a string containing the total bill value

function tipCalculator(mealPrice, taxRate = 0.13, tipRate = 0.15) {
  const totalBill = mealPrice * (1 + taxRate + tipRate);

  return `The total bill is $${totalBill.toFixed(2)}`;
}

console.log(tipCalculator(17.99));

// BONUS: Make the function return a string formatted $x.xx
