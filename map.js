const assertArraysEqual = require('./assertArraysEqual');

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

//Tests -----
// const results1 = map(words, word => word[0]);
// console.log(results1);
// const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(map(['apple', 'banana', 'citrus'], word => word[0]) , ['a', 'b', 'c']);

module.exports = map;
