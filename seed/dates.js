
const casual = require('casual');
const Dates = require('../pg/models');
const {doNumTimes} = require('../utils/helper-functions')
const randomUserId = Math.floor(Math.random() * 30);

const generateFakeDate = () => {
  const user = {
  name: casual.full_name,
  zipcode: casual.zip
}
  return User.build(user);
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
