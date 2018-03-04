const CryptoJS = require('crypto-js');
const dotenv = require('dotenv');

dotenv.config();

const encryptionKey = process.env.ENCRYPTION_KEY;
const messageToBeEncrypted = 'This is a super-secret message!';

const cipherText = CryptoJS.AES.encrypt(messageToBeEncrypted, encryptionKey);

const originalMessage  = CryptoJS.AES.decrypt(ciphertext.toString(), encryptionKey)
  .toString(CryptoJS.enc.Utf8);

console.log(originalMessage);
