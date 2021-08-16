const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

//Compare Objects
const eqObjects = function(object1, object2) {
  //check for equal length
  if (Object.keys(object1).length !== Object.keys(object2).length) { return false; }

  // check for same keys, returns array of keys
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  if (!eqArrays(obj1Keys, obj2Keys)) { return false; }

  //check for same values
/*   const obj1Values = Object.values(object1);
  const obj2Values = Object.values(object2);
  if(!eqArrays(obj1Values, obj2Values)){return false;}
 */
/*   for (let i = 0; i < obj1Keys.length; i++) {
    if (object1[obj1Keys[i]] !== object2[obj2Keys[i]]) { return false; }   
  }
 */
for(key in object1){
  if (object1[key] !== object2[key]) {
    return false;
  }
}
  return true;
} // closing function eqObjects()

//Tests ----------------
const ab = { a: "1", b: "2" };
const ba = { a: "3", b: "4" };
const bc = { b: "1", c: "2" };
const ab2 = { a: "1", b: "2" };
// console.log(Object.keys(ab));
// console.log(Object.keys(ab).length);
console.log(eqObjects(ab,ba));

assertEqual(eqObjects(ab, ba), false);
assertEqual(eqObjects(ab, bc), false);
assertEqual(eqObjects(ab, ab2), true);

module.exports = eqObjects;

