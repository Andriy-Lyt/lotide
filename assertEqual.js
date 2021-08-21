/*
//The console.assert() method writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.
*/

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`%c Assertion Passed: ${actual} === ${expected}`, 'background: #a8f7c5');
    } else {
      console.log(`%c Assertion Failed: ${actual} !== ${expected}`, 'background: #f5a6b4');
    }
};

// TEST CODE
// console.assert(sum(1, 2) === 3);
// console.assert(sum(1, 20) === 3, 'function does not work'); // bad / incorrect assertion, and we see it fail!


module.exports = assertEqual;