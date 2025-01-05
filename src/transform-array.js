const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)){
    throw new NotImplementedError('\'arr\' parameter must be an instance of the Array!')
  }
  newArr = Array();
  let i = 0;
  while (i < arr.length) {
    switch (arr[i]) {
      case '--double-next':
        if (arr[i+1]){
          newArr.push(arr[i+1])
        }
        break;        
      case '--discard-prev':
        newArr.pop()
        break;
      case '--discard-next':
        i += 1
        break;
      case '--double-prev':
        if (newArr[-1]) {
          newArr.push(newArr[newArr.length-1])
        }
        break;
      default:
        newArr.push(arr[i])
    }
    i += 1

  }
  return newArr
  // remove line with error and write your code here
}

module.exports = {
  transform
};
