const caesar = function(message, shift) {
  if (shift < 0) {
    shift = 26 + (shift % 26);
  }
  const capA = 'A'.charCodeAt(0);
  const lowA = 'a'.charCodeAt(0);
  const arr = message
    .split('')
    .map(char => {
      if (!char.match(/[A-z]/)) {
        return char;
      }
      let code = char.charCodeAt(0);
      if (char.match(/[A-Z]/)) {
        code -= capA;
        code = (code + shift) % 26;
        code += capA;
      } else if (char.match(/[a-z]/)) {
        code -= lowA;
        code = (code + shift) % 26;
        code += lowA;
      }
      return String.fromCharCode(code);
    });
  
  return arr.join('');
};

// Do not edit below this line
module.exports = caesar;
