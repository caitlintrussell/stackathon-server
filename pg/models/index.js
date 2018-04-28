

const Date = require('./date');
const Vote = require('./vote');
const Category = require('./category');
const User = require('./user');

User.hasMany(Vote);
Vote.belongsTo(User);

Date.belongsToMany(User, {through: 'UserDate', onDelete: 'cascade',});
User.belongsToMany(Date, {through: 'UserDate'});

Date.hasMany(Vote);
Vote.belongsTo(Date);

Date.hasOne(Category);
Category.belongsTo(Date);

module.exports = {
  Date,
  Vote,
  Category,
  User
}
