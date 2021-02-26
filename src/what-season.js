const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }

  if (!(date instanceof Date && !isNaN(date.valueOf()))) {
    throw Error;
  }

  const month = date.getMonth();

  if (month == 11 || month < 2) {
    return "winter";
  } else if (month < 5) {
    return "spring";
  } else if (month < 8) {
    return "summer";
  } else {
    return "autumn";
  }
};
