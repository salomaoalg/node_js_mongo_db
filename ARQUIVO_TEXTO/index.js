import fs from 'fs';

function gravarDados(){
    var data = document.querySelector('.texto').value;
}

fs.writeFile("books.txt", data,(err)=>{
    if(err)
        alert(err);
    else{
        console.log(fs.readFileSync('books.txt','utf8'))
        alert("Dados gravado com sucesso!")
    }
});