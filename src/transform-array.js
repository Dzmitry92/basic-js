const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const resultArray = [];

  for (let i = 0; i < arr.length; i += 1) {
    switch (arr[i]) {
      case "--discard-prev":
        resultArray.pop();
        break;
      case "--discard-next":
        resultArray.push("delete");
        i += 1;
        break;
      case "--double-prev":
        if (i !== 0) {
          resultArray.push(resultArray[resultArray.length - 1]);
        }
        break;
      case "--double-next":
        if (i !== arr.length - 1) {
          resultArray.push(arr[i + 1]);
        }
        break;
      default:
        resultArray.push(arr[i]);
        break;
    }
  }
  return resultArray.filter((e) => e !== "delete");
};
