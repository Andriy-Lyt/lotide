const eqArrays = (ar1, ar2) => {
  let check = true;
  for (let i = 0; i < ar1.length; i++) {
    if (ar1[i] !== ar2[i]) {
      check = false;
      // console.log("check = " + check);
      break;
    }
  } // closing for loop
  return check;
}
 
assertArraysEqual = function(ar1, ar2) {
  console.log( eqArrays(ar1, ar2));
}

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
// let odd = [1, 2, 3];
// console.log(odd[odd.length /2 + 0.5]);

// TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
