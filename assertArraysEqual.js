const eqArrays = require('./eqArrays');

assertArraysEqual = function(ar1, ar2) {
  console.log(eqArrays(ar1, ar2));
}

module.exports = assertArraysEqual;

