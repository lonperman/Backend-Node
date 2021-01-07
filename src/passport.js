const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
import usuario from './models/usuarios';
import usuarios from './database/database';
const helpers = require('./helpers');

passport.use('local.signin', new LocalStrategy({
    usernameField: 'id_usuario',
    passwordField: 'pass',  
    passReqToCallback: true  
}, async (req,id_usuario,pass,done ) => {
    
    const rows = await usuario.findAll({ where:{id_usuario}});
    if(rows.length > 0) {
        const user = rows[0];
        const validaPassword = await helpers.matchPassword(pass, user.pass);
        if(validaPassword){
            console.log("Si Existe");
        }else {
            console.log('No Existe');
        }
    }
}));

passport.use('local.signup', new LocalStrategy({
    usernameField: 'id_usuario',
    passwordField: 'pass',
    passReqToCallback: true
}, async (req,id_usuario,pass,done) => {
    
    const newUser = {
        id_usuario,
        pass
    };

    console.log(newUser);
    newUser.pass = await helpers.encryptPassword(pass);
    let result = await usuario.create(newUser);
    newUser.id_usuario = result.insertId;
    /*return done(null, newUser);*/
}));

/*passport.serializeUser((user) => {
    user.id_usuario
});

passport.deserializeUser(async (id_usuario) => {
    const rows = await usuarios.findAll({where: {id_usuario}});
    console.log(rows);
});*/