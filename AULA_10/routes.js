const express = require('express');
const route = express.Router();
const homeControllers = require ('./src/controllers/homeControllers')
const contatoController = require('./src/controllers/contatoController')


route.get('/' homeControllers.paginaInicial);
route.post('/', homeControllers.postagem)


//ROTAS DE CONTATO
route.get('./contatato', contatoController.paginaInicial);



module.exports = route;