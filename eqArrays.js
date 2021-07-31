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

let test1 = eqArrays([1, 2, 3], [1, 2, 3]); // => true
let test2 = eqArrays([1, 2, 3], [3, 2, 1]); // => false
let test3 = eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
let test4 = eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

// console.log("test2: "+ test2);


//Tests
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`%c Assertion Passed: ${actual} === ${expected}`, 'background: #a8f7c5');
  } else {
    console.log(`%c Assertion Failed: ${actual} !== ${expected}`, 'background: #f5a6b4');
  }
};

assertEqual(test1, true);
assertEqual(test2, false);
assertEqual(test3, true);
assertEqual(test4, false);

