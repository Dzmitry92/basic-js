const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let result = [];
  members.forEach((elem) => {
    if (typeof elem === "string") {
      result.push(elem.trim()[0].toUpperCase());
    }
  });
  return result.sort().join("");
};
