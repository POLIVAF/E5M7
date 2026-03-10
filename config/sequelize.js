const { Sequelize } = require('sequelize'); 

const sequelize = new Sequelize('modulo7', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;