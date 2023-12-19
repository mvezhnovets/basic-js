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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const numberToString = n.toString();
  const arrayNumber = [];

    for( let i = 0;  i < numberToString.length; i += 1 ){
      arrayNumber.push(+(numberToString.slice(0,i) + numberToString.slice(i + 1)))
      // return Math.max[...arrayNumber];
    }

  return Math.max(...arrayNumber);
}

module.exports = {
  deleteDigit
};
