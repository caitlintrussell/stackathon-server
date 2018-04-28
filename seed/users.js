
const casual = require('casual');
const User = require('../pg/models');
const {doNumTimes} = require('../utils/helper-functions')

const generateFakeUser = () => {
  const user = {
  name: casual.full_name,
  email: casual.email,
  phoneNumber: casual.phoneNumber,
  password: casual.password
}
  return User.create(user);
}

const makeUsers = (user) => {
  return doNumTimes(30, user)
}

const seedUsers = async () => {
  try {
    console.log('Seeding users...');
    await makeUsers(generateFakeUser())
  }

  catch (err) {
    console.error(err);
  }
}

module.exports = seedUsers;
