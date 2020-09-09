const CustomError = require("../extensions/custom-error");
module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error();
  let month = date.getMonth();
  return (month === 11) ? 'winter' : ['winter', 'spring', 'summer', 'fall'][Math.floor((month+1)/3)];
}
