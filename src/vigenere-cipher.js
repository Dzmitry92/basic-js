const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabetLength = 26;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Message or key is undefined");
    }

    let encryptedMessage = "";

    message = message.toUpperCase();
    key = key.toUpperCase();

    let keyIndex = 0;
    for (let i = 0; i < message.length; i++) {
      if (this.isLetter(message[i])) {
        let encryptedCharCode =
          message[i].charCodeAt() - 65 + key[keyIndex].charCodeAt() - 65;
        if (encryptedCharCode >= this.alphabetLength) {
          encryptedCharCode = encryptedCharCode % this.alphabetLength;
        }
        encryptedMessage += String.fromCharCode(encryptedCharCode + 65);

        if (keyIndex == key.length - 1) {
          keyIndex = 0;
        } else {
          keyIndex++;
        }
      } else {
        encryptedMessage += message[i];
      }
    }

    if (!this.direct) {
      encryptedMessage = this.reverse(encryptedMessage);
    }

    return encryptedMessage;
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error("Encrypted message or key is undefined");
    }

    let decryptedMessage = "";

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let keyIndex = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (this.isLetter(encryptedMessage[i])) {
        let decryptedCharCode =
          encryptedMessage[i].charCodeAt() - key[keyIndex].charCodeAt();
        if (decryptedCharCode < 0) {
          decryptedCharCode = this.alphabetLength + decryptedCharCode;
        }
        decryptedMessage += String.fromCharCode(decryptedCharCode + 65);

        if (keyIndex == key.length - 1) {
          keyIndex = 0;
        } else {
          keyIndex++;
        }
      } else {
        decryptedMessage += encryptedMessage[i];
      }
    }

    if (!this.direct) {
      decryptedMessage = this.reverse(decryptedMessage);
    }

    return decryptedMessage;
  }

  isLetter(char) {
    if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
      return true;
    }
  }

  reverse(message) {
    return message.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
