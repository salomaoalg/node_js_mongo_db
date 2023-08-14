exports.paginaInicial = (req, res) =>{
  res.render("index");
};

exports.postagem = (req, res) =>{
  res.send('Nova rota de POST');
};