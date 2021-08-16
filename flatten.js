const assertArraysEqual = require('./assertArraysEqual');
 
function flatten(array) {
  let flatAr = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      for (const item of element) {
        flatAr.push(item);
      } // closing inner for
    } else {
      flatAr.push(element);
    }
  } // closing outer for
  return flatAr;
}

// console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);