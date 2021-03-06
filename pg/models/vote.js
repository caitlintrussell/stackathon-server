const Sequelize = require('sequelize');
const db = require('../db');

const Vote = db.define('vote', {
  value: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Vote;
