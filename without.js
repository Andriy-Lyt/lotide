const without = (source, itemsToRemove) => {
  resultAr =[];
  let temp;
  
  for (let i = 0; i < source.length; i++) {
    temp = source[i];

    for (let j = 0; j < itemsToRemove.length; j++) {
        if (temp !== itemsToRemove[j]) { continue; }  
        else { temp = null; break; }
    } // closing inner for

    if (temp) {
      resultAr.push(source[i]);
      // console.log('resultAr: '+resultAr);
    }
  } // closing outer for

  return resultAr;
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

//Tests
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

// console.log(without([1, 2, 3], [1]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));
 
 


