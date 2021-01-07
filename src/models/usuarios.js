import Sequelize, { HasMany } from 'sequelize';
const sequelize = require('../database/database');

import inscripciones from './inscripciones';
import encuestas from './encuestas';

const usuarios = sequelize.define('usuarios', {
    id_usuario:{
       type: Sequelize.INTEGER,
       primaryKey: true,
       allowNull: false,
        autoIncrement: true
    },
    nom_usuario:{
        type: Sequelize.STRING
    },
    correo:{
        type: Sequelize.STRING
    },
    telefono:{
        type: Sequelize.STRING
    },
    pass:{
        type: Sequelize.CHAR
    },
    sexo:{
        type: Sequelize.STRING
    },
    tipo:{
        type: Sequelize.STRING
    }     
},{
    timestamps: false
    });

/*usuarios.hasMany(inscripciones, {foreinKey: 'id_usuario', sourceKey: 'id_usuario'});
inscripciones.belongsTo(usuarios, {foreingKey: 'id_usuario', sourceKey: 'id_usuario'});
usuarios.hasMany(encuestas, {foreinKey: 'id_usuario', sourceKey: 'id_usuario'});
encuestas.belongsTo(usuarios, {foreinKey: 'id_usuario', sourceKey: 'id_usuario'});*/


export default usuarios;