
const casual = require('casual');
const Date = require('../pg/models');
const {doNumTimes} = require('../utils/helper-functions')
const randomUserId = Math.floor(Math.random() * 30);

const generateFakeDate = () => {
  const date = {
  name: casual.full_name,
  zipcode: 60647,
}
  return Date.build(date);
}

const makeDates = (date) => {
  return doNumTimes(30, date)
}

const seedDates = async () => {
  try {
    console.log('Seeding dates...');
    await makeDates(generateFakeDate())
  }
  catch (err) {
    console.error(err);
  }
}

module.exports = seedDates;
