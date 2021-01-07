import Sequelize, { HasMany } from 'sequelize';
const sequelize = require('../database/database');


const eventos = sequelize.define ( 'eventos',{
   /* codigo_evento:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },*/
    nombre_evento:{
        type: Sequelize.STRING
    },	
    dependencia:{
        type: Sequelize.STRING
    },
    fechainicio:{
        type: Sequelize.DATE
    },	
    fechafinal:{
        type: Sequelize.DATE
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

export default eventos;