const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('node_postgres', 'postgres', 'root', {
  logging: false,
  host: 'localhost',
  dialect: 'postgres',
  port: 5433
});


module.exports = sequelize;