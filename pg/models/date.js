const Sequelize = require('sequelize');
const db = require('../db');

const Date = db.define('date', {
  initiator: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  zipCode: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  }
});

module.exports = Date;
