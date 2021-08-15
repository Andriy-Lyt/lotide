const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
 
// ACTUAL FUNCTION
const middle = function(array) {
  let result = [];
  if (array.length === 1 || array.length === 2) {
    return result;
  } else if (array.length % 2 === 1) {
    result.push(array[array.length / 2 - 0.5] )
  } else if (array.length % 2 === 0){
    result.push(array[array.length / 2 - 1] )
    result.push(array[array.length / 2 ] )
  }
  return result;
}

module.exports = middle;


