const express = require('express');
const route = express.Router();
const homeControllers = require ('./controllers/homeControllers')

route.get('/', homeControllers.paginaInicial);
route.post('/', homeControllers.postagem)


//ROTAS DE CONTATO
route.get('./contatato', contatocontroller.paginaInicial);
module.exports = route;