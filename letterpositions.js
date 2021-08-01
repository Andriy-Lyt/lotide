const letterPositions = (sentence) => {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
       let letter =  sentence[i]; 
      //  console.log('i: '+i);

      if (!results[letter]){
        results[letter] = [i];
        // console.log(results);
      }
      // console.log('results: '+results[letter][i]);
      // console.log('letter: '+letter);
      // console.log('i: '+i);
      else{
        results[letter].push(i);
      }
  } // closing for loop
  // console.log(results);
  return results;
}

const eqArrays = (ar1, ar2) => {
  let check;
  if (ar1.length !== ar2.length) {
    return check = false;
  }
  for (let i = 0; i < ar1.length; i++) {
    if (ar1[i] !== ar2[i]) {
      check = false;
      // console.log("check = " + check);
      break;
    }else{ check = true; }
  } // closing for loop
  return check;
}
 
assertArraysEqual = function(ar1, ar2) {
  console.log( eqArrays(ar1, ar2));
}

assertArraysEqual(letterPositions('aabb').a, [0,1] );
assertArraysEqual(letterPositions('aabb').b, [2,3] );

// console.log(letterPositions("hhello"));
