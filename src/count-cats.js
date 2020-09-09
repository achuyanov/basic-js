const CustomError = require("../extensions/custom-error");
module.exports = function countCats(arr) {
  //let cats = 0;
  //arr.flat().forEach( (cat) => cat=="^^" ? cats ++ : 0) ; //123ms
  return arr.flat().filter(cat => cat=='^^').length; //143ms
  //return cats;
};
 