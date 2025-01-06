const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  console.log(arr)
  const arrNew = new Array();
  let countElem = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      countElem += 1;
    }
    else {
      arrNew.push(countElem, arr[i])
      countElem = 1;
    }
    console.log()
  }
  
  return arrNew.filter((x) => x !== 1).join('')
}

module.exports = {
  encodeLine
};
