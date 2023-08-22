require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path')
const MeuMiddleware = require('./src/middleware/middleware')
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTONSTRING)
.then(()=> {
    console.log('CONECTADO A BASE DE DADOS');
    app.emit('PRONTO')
})
.catch(e => console.log(e));


app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(MeuMiddleware);

app.use(routes);

app.on('PRONTO', ()=>{
    app.listen(3000, () => {
        console.log('http://localhost:3000');
        console.log('Servidor executando!!');
    });
});

