exports.paginaInicial = (req, res) =>{
  console.log('respondendo ao cliente');
  res.render("index");
  return;
};

exports.postagem = (req, res) =>{
  res.send('Nova rota de POST');
  return;
};

//const HomeModel = require('../models/homeModel');

/* HomeModel.create({
  titulo: 'TÍTULO SEGUNDO TESTE DE BANCO',
  descricao: 'DESCRIÇÃO SEGUNDO TESTE'
})
  .then(dados => console.log(dados))
  .catch(e => console.log(e));
*/

//homefind
