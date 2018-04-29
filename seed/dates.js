
const casual = require('casual');
const { Date, UserDate }= require('../pg/models');
const {doNumTimes} = require('../utils/helper-functions')
const randomUserId = Math.floor(Math.random() * 30);

const fakeDates = [
  {
    initiator: 'Caitlin Trussell',
    zipCode: '60647',
    members: [1, 2, 9, 10],
  }, {
    initiator: 'Katy Collis',
    zipCode: '60647',
    members: [5, 7, 8, 4],
  }, {
    initiator: 'Allan Bott',
    zipCode: '60647',
    members: [1, 6],
  }, {
    initiator: 'Erica Westenberger',
    zipCode: '60647',
    members: [2, 5, 3],
  },
]

const makeDates = async (dates) => {
  for (let date of dates) {
    let {initiator, zipCode, members} = date;
    await Date.create({initiator, zipCode})
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
