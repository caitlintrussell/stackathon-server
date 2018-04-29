
const db = require('../pg/db');
const seedUsers = require('./users');
const seedCategories = require('./categories');
const seedDates = require('./dates');
const seedVotes = require('./votes');



async function seed() {
  try {
  await db.sync({ force: true })
  console.log('db synced!')
  await seedUsers();
  await seedDates();
  await seedCategories();
  await seedVotes();

  console.log(`seeded successfully`)
  }
  catch (err) {
    console.error(err);
  }
}


module.exports = seed;
