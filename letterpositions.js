const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = (sentence) => {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
       let letter =  sentence[i]; 
      //  console.log('i: '+i);

      if (!results[letter]){
        results[letter] = [i];
        // console.log(results);
      }
      else{
        results[letter].push(i);
      }
  } // closing for loop
  // console.log(results);
  return results;
}

assertArraysEqual(letterPositions('aabb').a, [0,1] );
assertArraysEqual(letterPositions('aabb').b, [2,3] );

// console.log(letterPositions("hhello"));
