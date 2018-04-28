const seedUsers = require('./users');
const seedCategories = require('./categories');
const seedDates = require('./dates');
const seedVotes = require('./votes');

const runSeed = async () => {
  await seedUsers();
  await seedCategories();
  await seedDates();
  await seedDates();
}
