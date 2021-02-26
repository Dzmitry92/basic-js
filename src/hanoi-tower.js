const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {};
  let x = Math.pow(2, disksNumber) - 1;
  let y = Math.floor(x / (turnsSpeed / 3600));
  result.turns = x;
  result.seconds = y;
  return result;
};
