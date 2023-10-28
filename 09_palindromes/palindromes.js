const palindromes = function (str) {
  const arr = str
    .toLowerCase()
    .split('')
    .filter(ch => ch.match(/[a-z]/));
  const len = arr.length;
  for (let i = 0; i < len / 2 - 1; i++) {
    if (arr[i] !== arr[len - 1 - i]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
