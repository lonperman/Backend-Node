import Sequelize, { HasMany } from 'sequelize';
const sequelize = require('../database/database');

const inscripciones = sequelize.define( 'inscripciones',{
    codigo_conferencia:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    id_usuario:{
        type: Sequelize.INTEGER,
        primarykey: true
    },
    fecha_registro:{
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    estado:{
        type: Sequelize.STRING
    }
});


export default inscripciones;