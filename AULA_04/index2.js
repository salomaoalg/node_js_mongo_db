const fs = require('fs');

fs.readFile('./dados.txt', {encoding: 'utf-8', flag:'r'},
function (err, data){
  if (err)
    console.log(err);
  else
    console.log(data);
});

const data = fs.readFileSync('info.txt', 'utf-8')
console.log(data);