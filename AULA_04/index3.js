/*
O método fs.renameSync() é usado para renomear de forma síncrona um arquivo 
no caminho antigo fornecido para o novo caminho fornecido. 
Ele substituirá o arquivo de destino se ele já existir.
____________________________________________________________________________

SINTAXE: "fs.renameSync(oldPath, newPath)"
____________________________________________________________________________
oldPath: Contém o caminho do arquivo que deve ser renomeado. 
Pode ser uma string, buffer ou URL.

newPath: contém o novo caminho para o qual o arquivo deve ser renomeado. 
Pode ser uma string, buffer ou URL.
*/

//Import the filesystem module
const fs = require('fs');

//list all the filesnames before renaming
getCurrentFilenames();

//Rename the file
fs.renameSync('info.txt', 'dados_pessoais');

//List all the filenames after renaming
getCurrentFilenames();

//function to get current filesnames in diractory
function getCurrentFilenames(){
  console.log("current filenames: ");
  fs.readdirSync(__dirname).forEach(file => {
    console.log(file)
  });
}
