const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != "string") {
    return false;
  } else if (/[A-Za-z]/.test(sampleActivity)) {
    return false;
  } else if (sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) {
    return false;
  }

  let rate = 0.693 / HALF_LIFE_PERIOD;
  let year = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / rate;
  return Math.ceil(year);
};