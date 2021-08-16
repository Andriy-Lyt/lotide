const assertEqual = require('./assertEqual');

const head = (array) => {
  return array[0];
}
let a = [1, 2, 3];
assertEqual(head(a), 1);

module.exports = head;

