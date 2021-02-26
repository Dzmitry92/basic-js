const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.separator === undefined) {
    options.separator = "+";
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = "|";
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.addition === undefined) {
    options.additionRepeatTimes = "";
  }

  let result = "";
  for (let i = 0; i < options.repeatTimes; i++) {
    result += str;
    for (let y = 0; y < options.additionRepeatTimes; y++) {
      result += options.addition;
      if (y < options.additionRepeatTimes - 1) {
        result += options.additionSeparator;
      }
    }
    if (i < options.repeatTimes - 1) {
      result += options.separator;
    }
  }
  return result;
};
