const Sequelize = require('sequelize');
const db = require('../db');

const Vote = db.define('vote', {
  value: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
});

module.exports = Vote;
