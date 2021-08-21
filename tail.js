function tail(array) {
  return array.length >= 2 ? array.slice(1) : [] ;
}


//Tests -------
// console.log(tail(["Hello", "Lighthouse", "Labs"])); 

// let string = "abc";
// string[0] = "F";
// console.log(string[0]);

module.exports = tail;
