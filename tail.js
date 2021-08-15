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

 
// let string = "abc";
// string[0] = "F";
// console.log(string[0]);

module.exports = tail;
