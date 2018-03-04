const CryptoJS = require('crypto-js');
const dotenv = require('dotenv');

dotenv.config();

const encryptionKey = process.env.ENCRYPTION_KEY;
const messageToBeEncrypted = 'This is a super-secret message!';

const cipherText = CryptoJS.AES.encrypt(messageToBeEncrypted, encryptionKey);

console.log(cipherText);
