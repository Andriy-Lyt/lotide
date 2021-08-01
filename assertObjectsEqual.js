//Compare Objects -----------
const eqObjects = function(object1, object2) {
  //check for equal length
  if (Object.keys(object1).length !== Object.keys(object2).length) { return false; }

  // check for same keys, returns array of keys
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  if (!eqArrays(obj1Keys, obj2Keys)) { return false; }

  //check for same values
  for (let i = 0; i < obj1Keys.length; i++) {
    if (object1[obj1Keys[i]] !== object2[obj2Keys[i]]) { return false; }   
  }

  return true;
}
//Compare Arrays
const eqArrays = (ar1, ar2) => {
  let check;
  if(Array.isArray(ar1) && Array.isArray(ar2)) {
    if (ar1.length !== ar2.length) {
      return check = false;
    }
    for (let i = 0; i < ar1.length; i++) {
      if (ar1[i] !== ar2[i]) {
        check = false;
        break;
      } else { check = true; }
    } // closing for loop
    return check;
  } else {
    return check = (ar1 !== ar2) ?  false : true;
  }
}

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



