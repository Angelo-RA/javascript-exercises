const add = function(addend1, addend2) {
	return addend1 + addend2;
};

const subtract = function(minuend, subtrahend) {
	return minuend - subtrahend;
};

const sum = function(arrayOfNum) {
  return arrayOfNum.reduce((partialSum, num) => partialSum + num, 0);;
};

const multiply = function(arrayOfNum) {
  return arrayOfNum.reduce((partialTotal, num) => partialTotal * num, arrayOfNum.length !=0 ? 1 : 0);
};

const power = function(num, exponent) {
	return num ** exponent;
};

const factorial = function(num) {
  let total = 1;
  for(let i=1; i<=num; i++) {
    total = total * i;
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
