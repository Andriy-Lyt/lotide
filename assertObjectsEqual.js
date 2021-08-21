const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
 if (eqObjects(obj1, obj2)) {
  console.log(`Objects are Equal ${inspect (obj1)} === ${inspect (obj2)}`)
 } else {
  console.log(`Objects are Not Equal ${inspect (obj1)} !== ${inspect (obj2)}`)
 }
}

//Tests ----------------
const ab = { a: "1", b: "2" };
const ba = { a: "3", b: "4" };
const bc = { b: "1", c: "2" };
const ab2 = { a: "1", b: "2" };

assertObjectsEqual(ab, ba); // false
assertObjectsEqual(ab, bc); // false
assertObjectsEqual(ab, ab2); //true

module.exports = assertObjectsEqual;



