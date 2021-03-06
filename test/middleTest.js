const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


// TEST CODE
let odd = [1, 2, 3];
console.log(odd[odd.length /2 + 0.5]);

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
