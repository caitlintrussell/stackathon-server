const { userIsLoggedIn, userCanEditDate, userCanEditVote } = require('../../../utils/helper-functions');

module.exports = {
  addVote: async (_, {
    input: { dateId, value }
  }, {
    req, res, models: { Vote }
  }) => {
    userIsLoggedIn(req, res);
    const vote = await Vote.create({value})
    vote.setUser(req.user.id);
    vote.setDate(dateId);
    return vote;
  },

  updateVote: async (_, {
    input: { voteId, value }
  }, {
    req, res, models: { Vote }
  }) => {
    userIsLoggedIn(req, res);
    const vote = await userCanEditVote(req, res, voteId);
    return vote.update({value});
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
