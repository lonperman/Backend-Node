import Sequelize, { HasMany } from 'sequelize';
const sequelize = require('../database/database');

import inscripciones from './inscripciones';
import encuestas from './encuestas';

const conferencias = sequelize.define('conferencias', {
    codigo_conferencia:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre_conferencia:{
        type: Sequelize.STRING
    }, 
    cupo:{
        type: Sequelize.STRING
    },
    codigo_evento:{
        type: Sequelize.INTEGER
    }, 
    id_conferencista:{
        type: Sequelize.STRING
    }, 
    codigo_espacio:{
        type: Sequelize.INTEGER
    }, 
    inicio:{
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }, 
    final:{
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    } 
});

/*conferencias.hasMany(inscripciones, {foreinKey: 'codigo_conferencia', sourceKey: 'codigo_conferencia'});
inscripciones.belongsTo(conferencias, {foreingKey: 'codigo_conferencia', sourceKey: 'codigo_conferencia'});
conferencias.hasMany(encuestas, {foreinKey: 'codigo_conferencia', sourceKey: 'codigo_conferencia'});
encuestas.belongsTo(conferencias, {foreinKey: 'codigo_conferencia', sourceKey: 'codigo_conferencia'});*/

export default conferencias;