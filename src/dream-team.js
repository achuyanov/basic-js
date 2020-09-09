const CustomError = require("../extensions/custom-error");
module.exports = function createDreamTeam(arr){
  if (!Array.isArray(arr)) return false;
  let ret = arr.filter(a => typeof a == "string").map(b => b.replace(/\s+/g, '')).map(c=>c[0].toUpperCase()).sort().join('');
  return ret != '' ? ret : false;
};