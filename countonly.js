const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`%c Assertion Passed: ${actual} === ${expected}`, 'background: #a8f7c5');
  } else {
    console.log(`%c Assertion Failed: ${actual} !== ${expected}`, 'background: #f5a6b4');
  }
};

//Function countOnly
const countOnly = (allItems, itemsToCount) => {
  const results = {};

  //loop ober object
  for(const key in itemsToCount){
    let counter = 0;
    if (itemsToCount[key] === true) {
      //loop over array
      for (const element of allItems) {
        if (element == key) {
          counter ++;
        }
      } // inner for
    } if(counter !== 0) {results[key] = counter;} 

  }// outer for
  // console.log(results);
  return results;
}//closing function

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);