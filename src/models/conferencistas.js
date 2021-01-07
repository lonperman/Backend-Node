import Sequelize, { HasMany } from 'sequelize';
const sequelize = require('../database/database');

import conferencias from './conferencias';

const conferencistas = sequelize.define('conferencistas', {
    id_conferencista:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nom_conferencista:{
        type: Sequelize.STRING
    }, 
    correo:{
        type: Sequelize.STRING
    }, 
    telefono:{
        type: Sequelize.STRING
    }, 
    especialidad:{
        type: Sequelize.STRING
    }, 
    sexo:{
        type: Sequelize.STRING
    }, 
    estado:{
        type: Sequelize.STRING(30)
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
    }

});

/*conferencistas.hasMany(conferencias, {foreinKey: 'id_conferencista', sourceKey: 'id_conferencista'});
conferencias.belongsTo(conferencistas, {foreinKey: 'id_conferencista', sourceKey: 'id_conferencista'});*/


export default conferencistas;