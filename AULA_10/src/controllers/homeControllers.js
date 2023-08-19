exports.paginaInicial = (req, res) =>{
  console.log('Respodendo ao cliente');
  res.render("index");
  return;
};

exports.postagem = (req, res) =>{
  res.send('Nova rota de POST');
  return;
};