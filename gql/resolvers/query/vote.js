const { userIsAdmin, userCanEditVote } = require('../../../utils/helper-functions');

module.exports = {
  allVotes: (_, __, { req, res, models: { Date } }) => {
    userIsAdmin(req, res);
    return Vote.findAll();
  },
  voteById: (_, { id }, { req, res }) => {
    return userCanEditVote(req, res, id);
  },
}
