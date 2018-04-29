const { userIsAdmin, userCanEditVote } = require('../../../utils/helper-functions');

module.exports = {
  allCategories: (_, __, { req, res, models: { Category } }) => {
    return Category.findAll();
  },
  categoryById: (_, { id }, { req, res, models: {Category} }) => {
    return Category.findById(id)
  },
}
