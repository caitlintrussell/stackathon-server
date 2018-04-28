const { userIsLoggedIn } = require('../utils');

module.exports = {

  createDate: async (_, {
    input: { name, initiator, zipCode, members }
  }, {
    req, res, models: { Date, Vote, User }
  }) => {
    userIsLoggedIn(req, res);
    const user = await User.findById(req.user.id);
    const date = await Date.create({ name, initiator, zipCode, members });
    user.addDate(date);
    return date;
  },

  updateDate: async (_, {
    input: { todoListId, input: { name, description } }
  }, {
    req, res
  }) => {
    const todoList = await userCanEditTodoList(req, res, todoListId);
    const newData = {};
    if (name !== undefined) newData.name = name;
    if (description !== undefined) newData.description = description;
    return todoList.update(newData);
  },

  addDate: async (_, {
    input: { todoListId, input: { title, text, completed } }
  }, {
    req, res, models: { TodoTask }
  }) => {
    const todoList = await userCanEditTodoList(req, res, todoListId);
    return todoList.addTodoTask(await TodoTask.create({ title, text, completed }));
  },

}
