const findTheOldest = function(arr) {
  arr.sort((a, b) => {
    const ageA = (a.yearOfDeath || new Date().getFullYear()) - a.yearOfBirth;
    const ageB = (b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth;
    return ageA > ageB ? -1 : 1;
  });
  return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
