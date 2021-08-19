const assertEqual = require('./assertEqual');

//Find Key
const findKey = (obj, cb) => {
  // console.log(obj["Blue Hill"].stars);
  
   for (const key in obj) {
     
    if (cb(obj[key])) {
      return key;
    }
  }// closing for loop
  return undefined;
}

//Test --------------
let a =  findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, (x) => x.stars === 2) // => "noma"

assertEqual(a, "noma");

