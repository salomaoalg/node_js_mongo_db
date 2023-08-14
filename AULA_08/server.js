const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));


// http://localhost:3000/testes/?nome=salomao=sobrenome=souza&idade=27&profile=salomaosouza


app.get('/', (req, res) => {
    res.send(`
    <form action = "/" method="POST">
    Nome: <input type="text" name="nome">
    <button>ENVIAR</button>
    </form>
    `);
});

app.get('/testes/:idusuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.profile);
});

app.post('/',(req, res) =>{
    console.log(req.body);
    res.send(`O que foi enviado: ${req.body.nome}`);
})


app.listen(3000, () => {
    console.log('http://localhost:3000');
    console.log('Servidor executando!!');
});