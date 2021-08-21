const takeUntil = function(array, callback) {
  slicedAr = [];
  for (elem of array) {
    if (callback(elem) !== true) {
      slicedAr.push(elem);
    } else { return slicedAr; }
  } // closing for loop
  return slicedAr;
}

//Tests --------
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); // should return [ 1, 2, 5, 7, 2 ]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// function (x) { return x < 0; } // returns boolean

module.exports = takeUntil;
