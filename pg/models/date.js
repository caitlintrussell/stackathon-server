const Sequelize = require('sequelize');
const db = require('../db');

const Date = db.define('date', {
  initiator: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  zipCode: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});
const UserDate = db.define('userDate');

module.exports = {Date, UserDate};
