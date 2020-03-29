
const crypto = require('crypto');

module.exports = function generateUniqueId(bytes = 4) {
  // Usando o Crypto para criar um ID único.
  return crypto.randomBytes(bytes).toString('HEX');
}