

const {Date, UserDate} = require('./date');
const Vote = require('./vote');
const Category = require('./category');
const User = require('./user');

User.hasMany(Vote);
Vote.belongsTo(User);

Date.belongsToMany(User, {through: UserDate, onDelete: 'cascade'});
User.belongsToMany(Date, {through: UserDate, as: 'members'});

Date.hasMany(Vote);
Vote.belongsTo(Date);

module.exports = {
  UserDate,
  Date,
  Vote,
  Category,
  User
}
