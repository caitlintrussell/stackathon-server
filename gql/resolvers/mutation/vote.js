const { userIsLoggedIn, userCanEditDate, userCanEditVote } = require('../../../utils/helper-functions');

module.exports = {
  addVote: async (_, {
    input: { dateId, value }
  }, {
    req, res, models: { Date, User, Vote }
  }) => {
    userIsLoggedIn(req, res);
    const user = await User.findById(req.user.id);
    const vote = await Vote.create({value})
    vote.userId = user;
    vote.dateId = dateId;
    return vote;
  },

  updateVote: async (_, {
    input: { input: {voteId, value } }
  }, {
    req, res, models: { Date, User, Vote }
  }) => {
    userIsLoggedIn(req, res);
    const vote = await userCanEditVote(req, res, voteId);
    return vote.update(value);
  },
  removeVote: async (_,
    {
      input: { voteId }
    }, {
      req, res
    }) => {
      const vote = await userCanEditVote(req, res, voteId);
      await vote.destroy();
      return vote.id;
    },
}
