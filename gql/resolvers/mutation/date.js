const { userIsLoggedIn } = require('../utils');

module.exports = {

  createDate: async (_, {
    input: { name, initiator, zipCode }
  }, {
    req, res, models: { Date, User }
  }) => {
    userIsLoggedIn(req, res);
    const user = await User.findById(req.user.id);
    const date = await Date.create({ name, initiator, zipCode, members });
    user.addDate(date);
    return date;
  },

  updateDate: async (_, {
    input: { dateId, input: { name, description } }
  }, {
    req, res
  }) => {
    const todoList = await userCanEditTodoList(req, res, dateId);
    const newData = {};
    if (name !== undefined) newData.name = name;
    if (description !== undefined) newData.description = description;
    return todoList.update(newData);
  },

  addDate: async (_, {
    input: { dateId, input: { title, text, completed } }
  }, {
    req, res, models: { TodoTask }
  }) => {
    const todoList = await userCanEditTodoList(req, res, todoListId);
    return todoList.addTodoTask(await TodoTask.create({ title, text, completed }));
  },

}
