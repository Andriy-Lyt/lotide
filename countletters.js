const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`%c Assertion Passed: ${actual} === ${expected}`, 'background: #a8f7c5');
  } else {
    console.log(`%c Assertion Failed: ${actual} !== ${expected}`, 'background: #f5a6b4');
  }
};
//Function
const countLetters = (string) => {
  const result = {};

  for (const letter of string) {
    let counter = 0;
    for (const testLetter of string) {
      if (letter === testLetter && letter !==' ') {
        counter++;
      }
    } // inner for
    if (counter !== 0) { result[letter] = counter;  }
  } // outer for

  return result;
}

const testResult = countLetters("lighthouse in the house");
assertEqual(testResult["l"], 1);
//and so on for the rest of letters

//below test looks simplier to write:
console.log( countLetters("lighthouse in the house"));
