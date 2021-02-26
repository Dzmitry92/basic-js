const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array: (chain = []),
  getLength() {
    return this.array.length;
  },
  addLink(value = "") {
    this.array.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      position <= 0 ||
      position > this.array.length ||
      typeof position !== "number"
    ) {
      this.array = [];
      throw Error("Wrong position: " + position);
    }
    this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    const result = this.array.join("~~");
    this.array = [];
    return result;
  },
};

module.exports = chainMaker;
