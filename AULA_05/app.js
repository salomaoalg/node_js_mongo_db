const path = require('path');
const caminhoA = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');

const pessoas = [
    {nome: 'Maria'},
    {nome: 'José'},
    {nome: 'André'},
    {nome: 'Cassia'},
];

const json = JSON.stringify(pessoas,'',2);
escreve(caminhoA, json)