const { userIsLoggedIn, userCanEditDate } = require('../../../utils/helper-functions');

module.exports = {
  createDate: async (_, {
    input: { name, zipCode }
  }, {
    req, res, models: { Date, User }
  }) => {
    userIsLoggedIn(req, res);
    const user = await User.findById(req.user.id);
    const date = await Date.create({ name, zipCode });
    date.setUsers(user);
    return date;
  },

  addUserToDate: async (_, {
    input: { userId, dateId }
  }, {
    req, res, models: { Date, User }
  }) => {
    userIsLoggedIn(req, res);
    const user = await User.findById({ userId });
    const date = await Date.findById({ dateId });
    date.setUsers(user);
    return date;
  },

  updateDate: async (_, {
    input: { dateId, input: { name, initiator, zipCode} }
  }, {
    req, res
  }) => {
    const date = await userCanEditDate(req, res, dateId);
    const newData = {};
    if (name !== undefined) newData.name = name;
    if (initiator !== undefined) newData.initiator = initiator;
    if (zipCode !== undefined) newData.zipCode = zipCode;
    return date.update(newData);
  },

}
