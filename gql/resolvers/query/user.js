const { userIsAdmin } = require('../../../utils/helper-functions');

module.exports = {
  allUsers: (_, __, { req, res, models: { User } }) => {
    return User.findAll();
  },
  userById: (_, { id }, { req, res, models: { User } }) => {
    return User.findById(id);
  },
}
