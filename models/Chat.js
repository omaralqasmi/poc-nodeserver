const Sequelize = require('sequelize');

const sequelize = require('../database');

const Chat = sequelize.define('chat', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  senderid: Sequelize.STRING,
  receiverid: Sequelize.STRING,
  text: Sequelize.STRING,
  date: Sequelize.STRING,
});

module.exports = Chat;
