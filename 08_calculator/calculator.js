const add = function(numberOne, numberTwo ) {
	return numberOne + numberTwo;
};

const subtract = function(numberOne, numberTwo) {
  return numberOne - numberTwo;
	
};

const sum = function(numbers) {
	count = 0;
  for (let i = 0; i < numbers.length; i++) {
    count += numbers[i];
  }
  return count;
};

const multiply = function(numbers) {
  total = 1
  for (let i = 0; i < numbers.length; i++) {
    total *= numbers[i];
  }
  return total;
};

const power = function(numberOne, numberTwo) {
  return numberOne ** numberTwo;
	
};

const factorial = function(number) {
	total = 1;
  for (let i = 1; i <= number; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
