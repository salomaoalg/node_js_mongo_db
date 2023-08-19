module.exports = (req, res, next) =>{
  console.log();
  console.log('Passei no middleare global');
  console.log();
  next();
}