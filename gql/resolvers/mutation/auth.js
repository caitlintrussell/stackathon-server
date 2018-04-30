module.exports = {
  signup: async (_, {input: { name, email, password, phoneNumber }}, { req, res, models: { User } }) => {
    let user;
    try {
      user = await User.create({ name, email, password, phoneNumber });
    } catch(err) {
      res.status(400);
      throw new Error('User Already Exists')
    }
    req.login(user, err => { if (err) throw new Error(err) });
    return user;
  },
  login: async (_, {input: { email, password }}, { req, models: { User } }) => {
    const user = await User.findOne({ where: { email } });
    console.log('hello????')
    if (!user) throw new Error('User Not Found');
    if (!user.correctPassword(password)) throw new Error('Incorrect Password');
    req.login(user, err => { if (err) throw new Error(err) });
    return user;
  },
  logout: (_, __, { req } ) => {
    const user = req.user;
    req.logout();
    return user;
  },
}
