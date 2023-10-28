const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((a,b) => a + b, 0);
};

const multiply = function(arr) {
  return arr.reduce((a,b) => a*b,1);
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(n, result=1) {
  if (n <= 1) {
    return result;
  }
  return factorial(n-1,result * n);
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
