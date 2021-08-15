const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

let test1 = eqArrays([1, 2, 3], [1, 2, 3]); // => true
let test2 = eqArrays([1, 2, 3], [3, 2, 1]); // => false
let test3 = eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
let test4 = eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(test1, true);
assertEqual(test2, false);
assertEqual(test3, true);
assertEqual(test4, false);
