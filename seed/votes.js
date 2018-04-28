
const casual = require('casual');
const Dates = require('../pg/models');
const {doNumTimes} = require('../utils/helper-functions')
const randomUserId = Math.floor(Math.random() * 30);

const generateFakeVote = () => {
  const user = {
  name: casual.full_name,
  zipcode: casual.zip
}
  return User.build(user);
}

const makeVote = (vote) => {
  return doNumTimes(60, vote)
}

const seedVotes = async () => {
  try {
    console.log('Seeding dates...');
    await makeVote(generateFakeVote())
  }
  catch (err) {
    console.error(err);
  }
}

module.exports = seedVotes;
