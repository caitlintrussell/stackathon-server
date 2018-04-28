
const casual = require('casual');
const Vote = require('../pg/models');
const {doNumTimes} = require('../utils/helper-functions')
const randomUserId = Math.floor(Math.random() * 30);

const sampleCategories = ['mexican', 'pizza', 'italian', 'chinese', 'thai', 'burgers', 'brunch', 'bakery', 'sandwiches', 'thai', 'vegetarian', 'comfort food', 'japanese', 'seafood', 'mediterranean', 'spanish', 'southern', 'cajun', 'pub', 'indian', 'halal', 'ethiopian', 'vegan', 'gastropub', 'greek', 'coffee', 'lebanese'];

const generateFakeVote = () => {
  const vote = {
    value: sampleCategories[Math.floor(Math.random() * (sampleCategories.length + 1))]
}
  return Vote.create(vote);
}

const makeVote = (vote) => {
  return doNumTimes(60, vote)
}

const seedVotes = async () => {
  try {
    console.log('Seeding votes...');
    await makeVote(generateFakeVote())
  }
  catch (err) {
    console.error(err);
  }
}

module.exports = seedVotes;
