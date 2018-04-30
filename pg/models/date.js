const Sequelize = require('sequelize');
const db = require('../db');

const Date = db.define('date', {
  initiator: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  when: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  zipCode: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  resolved: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  }
});
const UserDate = db.define('userDate');

module.exports = {Date, UserDate};
