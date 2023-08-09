const fs = require('fs').promises;

module.exports = (caminhoA) => fs.readFile(caminhoA,'utf-8');