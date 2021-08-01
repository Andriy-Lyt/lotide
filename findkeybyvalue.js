const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`%c Assertion Passed: ${actual} === ${expected}`, 'background: #a8f7c5');
  } else {
    console.log(`%c Assertion Failed: ${actual} !== ${expected}`, 'background: #f5a6b4');
  }
};

const findKeyByValue = (obj, val) => {
  for (const key in obj) {
    if (obj[key] === val ) {
      return key;
    }
  } // closing for loop
  return undefined;
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);