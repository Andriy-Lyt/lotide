const assert = require('chai').assert;
const tail   = require('../tail');

describe("#head", () => {
  it("cuts 1st element from array", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);

  // console.log('test log: '+result + '== ["Lighthouse", "Labs"]' );
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });
});


/* 
const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result[0], result[1]);

assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

console.log(tail([]));
 */
