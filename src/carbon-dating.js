const CustomError = require("../extensions/custom-error");
const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

function yearCalc(act) {
  return Math.ceil(Math.log(MODERN_ACTIVITY / act) / (0.693/HALF_LIFE_PERIOD));
}

module.exports = function dateSample(activity) {
  let act = parseFloat(activity);
  if (typeof activity != 'string' || !act ) return false;
  return  (act > 0 && act < MODERN_ACTIVITY) ? yearCalc(act) : false;
}