/*
O método fs.writeFile() é usado para gravar de forma 
assíncrona os dados especificados em um arquivo. 
Por padrão, o arquivo será substituído se existir. 
O parâmetro 'options' pode ser usado para modificar a 
funcionalidade do método.

Sintaxe:
fs.writeFile(arquivo, dados, opções, retorno de chamada)
*/

const fs = require('fs');

let data = "Este texto será escrito no documento"

fs.writeFile("books.txt", data,(err)=>{
    if(err)
        console.log(err);
    else{
        console.log("Escrito com sucesso!")
        console.log("CONTEUDO DO ARQUIVO:____")
        console.log(fs.readFileSync('books.txt','utf8'))
    }
});
