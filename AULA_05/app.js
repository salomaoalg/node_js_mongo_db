const path = require('path');
const caminhoA = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/leitura');
/*
const pessoas = [
    {nome: 'Maria'},
    {nome: 'José'},
    {nome: 'André'},
    {nome: 'Cassia'},
];

const json = JSON.stringify(pessoas,'',2);
escreve(caminhoA, json)
*/

/*
async function lerArquivo(caminhoA){
    const dados = await ler(caminhoA);
    return dados;
}

const dadosArquivo = lerArquivo(caminhoA)
.then(dados => console.log(dados));
*/

async function lerArquivo(caminhoA){
    const dados = await ler(caminhoA);
    exibedados(dados);
}

function exibedados(dados){
    dados = JSON.parse(dados);
    dados.forEach(element => {
        console.log(element);
    });
}

lerArquivo(caminhoA);