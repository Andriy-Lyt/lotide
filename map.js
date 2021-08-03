const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// const results1 = map(words, word => word[0]);
// console.log(results1);

//Equal Arrays
assertArraysEqual = function(ar1, ar2) {
  console.log( eqArrays(ar1, ar2));
}
const eqArrays = (ar1, ar2) => {
  let check;
  if (ar1.length !== ar2.length) {
    return check = false;
  }
  for (let i = 0; i < ar1.length; i++) {
    if (ar1[i] !== ar2[i]) {
      check = false;
      // console.log("check = " + check);
      break;
    }else{ check = true; }
  } // closing for loop
  return check;
}

assertArraysEqual(map(['apple', 'banana', 'citrus'], word => word[0]) , ['a', 'b', 'c']);

