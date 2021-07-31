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