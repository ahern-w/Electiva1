const{ Sequelize } = require ('sequelize');


const db_connection = new Sequelize (
            'user_test',
            'root',
            '',{
                host:'127.0.0.1',
                 dialect:'mysql'
        
    });

module.exports = {
    db_connection
    };