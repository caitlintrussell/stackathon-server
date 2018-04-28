const { userIsAdmin, userCanEditDate } = require('../../../utils/helper-functions');

module.exports = {
  allDates: (_, __, { req, res, models: { Date } }) => {
    userIsAdmin(req, res);
    return Date.findAll();
  },
  dateById: (_, { id }, { req, res }) => {
    return userCanEditDate(req, res, id);
  },
}
