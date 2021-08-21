const eqArrays = require('./eqArrays');

//Compare Objects
const eqObjects = function(object1, object2) {

//check for equal length
if (Object.keys(object1).length !== Object.keys(object2).length) { return false; }

//check for same values block -----------
const obj1Keys = Object.keys(object1);

//check for equal values (arrays, objects or primitives) regardles of the keys' order in both objects
for (const key of obj1Keys) {
  
  //if values are objects (both arrays and objects)
  if(typeof object1[key] === 'object') {
    // console.log(object1[key], object2[key]);

      //if values are Arrays
      if(Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      }
      //if values are objects - recursion
      else if(!eqObjects(object1[key], object2[key])){
          return false;
        }
  } // closing outer if

  // if values are primitives
  else {
    if (object1[key] !== object2[key]) {
      return false;
    }  
  }
} //closing for of loop
return true;
} // closing function eqObjects()

//Tests --------------------

//Primitive values test: 
/* 
const ab = { a: "1", b: "2" };
const ba = { a: "3", b: "4" };
const bc = { b: "1", c: "2" };
const ab2 = { a: "1", b: "2" };
console.log(Object.keys(ab));
console.log(Object.keys(ab).length);
console.log(eqObjects(ab,ba));

assertEqual(eqObjects(ab, ba), false);
assertEqual(eqObjects(ab, bc), false);
assertEqual(eqObjects(ab, ab2), true);
 */

//Array values test: ------------
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc), "should be true");  // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2), "should be false"); // => false

//Nested Objects test ------------
console.log(eqObjects( { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 } ), " - should be true, line 67") // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), "- should be false, line 69");// => false

// console.log(Object.keys({ a: { z: 1 }, b: 2 }));
// console.log(Object.keys({ a: { z: 1 }, b: 2 }).length == Object.keys({ a: { z: 1 }, b: 2 }).length); 

module.exports = eqObjects;

