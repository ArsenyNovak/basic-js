const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nArray = n.toString().split('');
  console.log(nArray)
  const arr = new Array();
  for (let i = 0; i < nArray.length + 1 ; i++) {
    console.log(i)
    nArray = n.toString().split('');
    nArray.splice(i, 1);
    arr.push(+(nArray.join('')));
    console.log(arr)
  }
  return Math.max(...arr)
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
