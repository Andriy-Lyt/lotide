// assertEqual Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`%c Assertion Passed: ${actual} === ${expected}`, 'background: #a8f7c5');
  } else {
    console.log(`%c Assertion Failed: ${actual} !== ${expected}`, 'background: #f5a6b4');
  }
};

function tail(array) {
  return array.length >= 2 ? array.slice(1) : [] ;
}
// console.log(tail([]));

const result = tail(["Hello", "Lighthouse", "Labs"]);
// console.log(result[0], result[1]);

assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
 