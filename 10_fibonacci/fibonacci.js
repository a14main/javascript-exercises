const fibonacci = function(i,a=1,b=1) {
  if (i < 1) {
    return 'OOPS';
  }
  if (i < 2) {
    return a;
  }
  return fibonacci(i-1,b,a+b);
};

// Do not edit below this line
module.exports = fibonacci;
