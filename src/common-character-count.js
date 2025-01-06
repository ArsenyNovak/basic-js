const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const setS1 = new Set(s1);
  const setS2 = new Set(s2);
  const unionSet = new Set();
  for (const item of setS1) {
    if (setS1.has(item)) {
      unionSet.add(item);
    }
  }
  let count = 0;
  let countS1;
  let countS2;
  for (const item of unionSet) {
    countS1 = s1.split('').filter((x) => x === item).length;
    countS2 = s2.split('').filter((x) => x === item).length;
    if (countS1 > countS2) {
      count += countS2;
    }
    else {
      count += countS1;
    } 
  }
  return count
  // remove line with error and write your code here
} 

module.exports = {
  getCommonCharacterCount
};
