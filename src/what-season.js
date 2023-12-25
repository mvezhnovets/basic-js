const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

try {  if(!date) return 'Unable to determine the time of year!';
  if (isNaN(date)) throw new Error ('Invalid date!');

  let month = date.getMonth() + 1;

  if( month >= 3 && month <= 5 ) {
    return 'spring'
  } else if (month >= 6 && month <= 8) {
    return 'summer'
  } else if (month >= 3 && month <= 11) {
    return 'autumn'
  } return 'winter'
} catch(error) {
  throw new Error ('Invalid date!')
}


}

module.exports = {
  getSeason
};
