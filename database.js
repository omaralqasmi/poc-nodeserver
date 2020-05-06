const Sequelize = require('sequelize');

const sequelize = new Sequelize('simply-chat', 'root', 'rootroot', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
