
const db = require('../pg/db');
const seedUsers = require('./users');
const seedCategories = require('./categories');
const seedDates = require('./dates');
const seedVotes = require('./votes');

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')
  await seedUsers();
  await seedCategories();
  await seedVotes();
  await seedDates();
  console.log(`seeded successfully`)
}

seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

console.log('seeding...')
