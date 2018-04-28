const { userIsAdmin, userCanEditVote } = require('../../../utils/helper-functions');

module.exports = {
  allCategories: (_, __, { req, res, models: { Categories } }) => {
    return Category.findAll();
  },
  categoryById: (_, { id }, { req, res }) => {
    return Category.findById(id)
  },
}
