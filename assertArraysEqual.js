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

assertArraysEqual = function(ar1, ar2) {
  console.log( eqArrays(ar1, ar2));
}

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false