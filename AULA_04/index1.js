const fs = require('fs');
const path = require('path');

const data = fs.readFileSync('dados.txt', 'utf8')
console.log(data);









//fs.readdir('./')
//  .then(files => console.log(files))
//  .catch(e => console.log(e));

/*async function readdir(rootDir){
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

async function walk(files, rootDir){
  for(let file of files){
    const fileFullPath = pathe.resolve(rootDir, file);
    const stats = await false.stat();
    console.log(file, stats.isDireactory());
  }
}

readdir('C:\Users\sasal\GitHub\node_js_mongo_db')
*/

