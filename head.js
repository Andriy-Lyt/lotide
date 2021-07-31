const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`%c Assertion Passed: ${actual} === ${expected}`, 'background: #a8f7c5');
  } else {
    console.log(`%c Assertion Failed: ${actual} !== ${expected}`, 'background: #f5a6b4');
  }
};

const head = (array) => {
  return array[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

console.log( head([]));
