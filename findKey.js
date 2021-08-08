const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`%c Assertion Passed: ${actual} === ${expected}`, 'background: #a8f7c5');
  } else {
    console.log(`%c Assertion Failed: ${actual} !== ${expected}`, 'background: #f5a6b4');
  }
};
//Find Key
const findKey = (obj, cb) => {
  // console.log(obj["Blue Hill"].stars);
  
   for (const key in obj) {
    // console.log('cb(key): '+cb(obj[key]) );
    // console.log('obj[key]["stars"]: '+obj[key]["stars"] );
    // console.log('obj[key].stars: '+obj[key].stars ); works
    // console.log(obj[key]["stars"] === 2);   works
    // console.log(obj[key]["stars"] === cb(obj[key]));
    // console.log('cb(obj[key]):'+ cb(obj[key])); //works, returns BOOLEAN
    // console.log('obj[key]["stars"]: ' +obj[key]["stars"]); //works, returns NUMBER
    
    if (cb(obj[key])) {
        // console.log('obj[key]["stars"]=='+ obj[key]["stars"]);
        // console.log('key: '+key);
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

console.log(a);

