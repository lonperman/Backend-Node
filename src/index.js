import app from './app';
const sequelize = require('./database/database');
const passport = require('passport');
require('./passport');

app.use(passport.initialize());
app.use(passport.session());

//Conexion a base de datos
sequelize.authenticate()
.then(() => {
  console.log('Conectado con la Base de Datos');
})
.catch(err => {
  console.error('No Establada la Conexion:', err);
});

async function main(){
    await app.listen(4552);
    console.log('Servidor Encendido Puerto 4552');
};

main();
