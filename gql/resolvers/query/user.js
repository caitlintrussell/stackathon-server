const { userIsAdmin } = require('../../../utils/helper-functions');

module.exports = {
  allUsers: (_, __, { req, res, models: { User } }) => {
    userIsAdmin(req, res);
    return User.findAll();
  },
  userById: (_, { id }, { req, res, models: { User } }) => {
    userIsAdmin(req, res);
    return User.findById(id);
  },
}
