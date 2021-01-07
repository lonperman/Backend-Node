import Sequelize, { HasMany } from 'sequelize';
const sequelize = require('../database/database');
import conferencias from './conferencias';

const espacios = sequelize.define('espacios', {
   /* codigo_espacio:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },*/
    nomb_espacio:{
        type: Sequelize.STRING
    },
    capacidad:{
        type: Sequelize.INTEGER
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

/*espacios.hasMany(conferencias, {foreinKey: 'codigo_espacio', sourceKey: 'codigo_espacio'});
conferencias.belongsTo(espacios, {foreingKey: 'codigo_espacio', sourceKey: 'codigo_espacio'});*/

export default espacios;