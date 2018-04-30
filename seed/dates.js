
const casual = require('casual');
const { Date, UserDate }= require('../pg/models');
const {doNumTimes} = require('../utils/helper-functions')
const randomUserId = Math.floor(Math.random() * 30);

const fakeDates = [
  {
    initiator: 'Caitlin Trussell',
    zipCode: '60647',
    when: 'May 4th, 8PM',
    resolved: true,
  }, {
    initiator: 'Katy Collis',
    zipCode: '60647',
    when: 'May 28th 6PM',
    resolved: true,
  }, {
    initiator: 'Allan Bott',
    zipCode: '60647',
    when: 'April 30th 7PM',
    resolved: true,
  }, {
    initiator: 'Erica Westenberger',
    zipCode: '60647',
    when: 'June 1st 9PM',
    resolved: true,
  },
]

const makeDates = async (dates) => {
  for (let date of dates) {
    let {initiator, zipCode, when, resolved} = date;
    await Date.create({initiator, zipCode, when, resolved})
  }
}

const makeAssociations = async () => {
  await UserDate.create({dateId: 1, userId: 1 })
  await UserDate.create({dateId: 1, userId: 2 })
  await UserDate.create({dateId: 1, userId: 9 })
  await UserDate.create({dateId: 1, userId: 10 })
  await UserDate.create({dateId: 2, userId: 5 })
  await UserDate.create({dateId: 2, userId: 7 })
  await UserDate.create({dateId: 2, userId: 8 })
  await UserDate.create({dateId: 2, userId: 4 })
  await UserDate.create({dateId: 3, userId: 1 })
  await UserDate.create({dateId: 3, userId: 6 })
  await UserDate.create({dateId: 4, userId: 2 })
  await UserDate.create({dateId: 4, userId: 5 })
  await UserDate.create({dateId: 4, userId: 3 })
}

const seedDates = async () => {
  try {
    console.log('Seeding dates...');
    await makeDates(fakeDates);
    await makeAssociations()
  }
  catch (err) {
    console.error(err);
  }
}

module.exports = seedDates;
