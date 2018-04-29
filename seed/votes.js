
const casual = require('casual');
const { Vote } = require('../pg/models');
const randomUserId = Math.floor(Math.random() * 30);

const sampleCategories = ['mexican', 'pizza', 'italian', 'chinese', 'thai', 'burgers', 'brunch', 'bakery', 'deli', 'vegetarian', 'comfort food', 'japanese', 'seafood', 'mediterranean', 'spanish', 'southern', 'cajun', 'pub', 'indian', 'halal', 'ethiopian', 'vegan', 'gastropub', 'lebanese']

const generateFakeVote = async () => {
  const votes = [
      { value: 'mexican', dateId: 1, userId: 1 },
      { value: 'thai', dateId: 1, userId: 2 },
      { value: 'burgers', dateId: 1, userId: 9 },
      { value: 'burgers', dateId: 1, userId: 10 },
      { value: 'vegetarian', dateId: 2, userId: 4 },
      { value: 'deli', dateId: 2, userId: 5 },
      { value: 'vegetarian', dateId: 2, userId: 7 },
      { value: 'gastropub', dateId: 2, userId: 8 },
      { value: 'southern', dateId: 3, userId: 1 },
      { value: 'thai', dateId: 3, userId: 6 },
      { value: 'japanese', dateId: 4, userId: 2 },
      { value: 'thai', dateId: 4, userId: 3 },
      { value: 'italian', dateId: 4, userId: 5 },
  ]
  for (vote of votes) {
    await Vote.create(vote);
  }
}

const seedVotes = async () => {
  try {
    console.log('Seeding votes...');
    await generateFakeVote();
  }
  catch (err) {
    console.error(err);
  }
}

module.exports = seedVotes;
