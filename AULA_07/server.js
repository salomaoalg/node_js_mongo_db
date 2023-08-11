const express = require('express');
const app = express();

// CRIAR        LER         ATUALIZAR       DELETE
// CREATE       READ        UPDATE          DELETE
// POST         GET         PUT             DELETE
// npm install nodemon --save-dev

app.get('/', (req, res) => {
    res.send(`
    <form action = "/" method="POST">
    Nome: <input type="text" name="nome">
    <button>ENVIAR</button>
    </form>
    `);
});

app.post('/',(req, res) =>{
    res.send('Formulário Recebido')
})

app.get('/', (req, res)=>{
    res.send('Hello Word!');
});

app.listen(3000, () => {
    console.log('http://localhost:3000');
    console.log('Servidor executando!!');
});