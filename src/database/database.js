import Sequelize from 'sequelize';

module.exports = new Sequelize(
    'EventosUnivalle',
    'postgres',
    'Alejo',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }

)