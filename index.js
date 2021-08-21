const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countletters = require('./countletters');
const countonly = require('./countonly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findkeybyvalue = require('./findkeybyvalue');
const flatten = require('./flatten');
const head   = require('./head');
const letterpositions   = require('./letterpositions');
const map   = require('./map');
const middle = require('./middle');
const tail   = require('./tail');
const takeUntil   = require('./takeUntil');
const without   = require('./without');

module.exports = {
  assertArraysEqual, assertEqual, assertObjectsEqual, countletters, countonly, eqArrays, eqObjects, 
  findKey, findkeybyvalue, flatten, head, letterpositions, map, middle, tail, takeUntil, without
};

// console.log(module.exports);