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
  if (Object.prototype.toString.call(date) === '[object Date]') {
    const seasons = {spring : [2,3,4],
      autumn : [8,9,10],
      summer : [5,6,7],
      winter : [11,0,1]
    };
    if (!isNaN(date) && typeof date.getMonth === 'function') {
      const month = date.getMonth();
      for (let season of Object.keys(seasons)){
        if (seasons[season].includes(month)) {
          return season
        }
      }
    }  
  }
  throw new TypeError("Invalid date!")
  

  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
