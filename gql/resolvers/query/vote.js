const { userIsAdmin, userCanEditVote } = require('../../../utils/helper-functions');

module.exports = {
  allVotes: (_, __, { req, res, models: { Vote } }) => {
    // userIsAdmin(req, res);
    return Vote.findAll();
  },
  voteById: (_, { id }, { req, res }) => {
    return userCanEditVote(req, res, id);
  },
}
