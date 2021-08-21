const assertArraysEqual = require('./assertArraysEqual');

 const without = (source, itemsToRemove) => {
  const resultAr =[];
  let sourceItem;
  
  for (let i = 0; i < source.length; i++) {
    sourceItem = source[i];

    for (let j = 0; j < itemsToRemove.length; j++) {
        if (sourceItem !== itemsToRemove[j]) { continue; }  
        else { sourceItem = null; break; }
    } // closing inner for

    if (sourceItem) {
      resultAr.push(source[i]);
      // console.log('resultAr: '+resultAr);
    }
  } // closing outer for

  return resultAr;
}
 
//Tests -----------
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);

// console.log(without([1, 2, 3], [1]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));

module.exports = without;

 
 


