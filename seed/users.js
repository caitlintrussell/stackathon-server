
const casual = require('casual');
const { User } = require('../pg/models');
const {doNumTimes} = require('../utils/helper-functions')

const friends = [
  {
    name: 'Caitlin Trussell',
    email: 'caitlin@caitlin.com',
    phoneNumber: '5555555551',
    password: '123',
  }, {
    name: 'Erica Westenberger',
    email: 'erica@erica.com',
    phoneNumber: '5555555552',
    password: '123',
  }, {
    name: 'Kaiya Mccormick',
    email: 'kaiya@kaiya.com',
    phoneNumber: '5555555553',
    password: '123',
  }, {
    name: 'Katy Collis',
    email: 'katy@katy.com',
    phoneNumber: '5555555554',
    password: '123',
  }, {
    name: 'Fernando Melo',
    email: 'fern@fern.com',
    phoneNumber: '5555555555',
    password: '123',
  }, {
    name: 'Allan Bott',
    email: 'allan@allan.com',
    phoneNumber: '5555555556',
    password: '123',
  }, {
    name: 'Megan Erwin',
    email: 'meg@meg.com',
    phoneNumber: '5555555557',
    password: '123',
  }, {
    name: 'Roehm Hepler-Gonzales',
    email: 'ro@ro.com',
    phoneNumber: '5555555558',
    password: '123',
  }, {
    name: 'Jess Green',
    email: 'jess@jess.com',
    phoneNumber: '5555555559',
    password: '123',
  }, {
    name: 'Sarah Walter',
    email: 'sarah@sarah.com',
    phoneNumber: '5555555550',
    password: '123',
  }
];


const makeUsers = async (users) => {
  for (let user of users) {
    await User.create(user)
  }
}

const seedUsers = async () => {
  try {
    console.log('Seeding users...');
    await makeUsers(friends)
  }

  catch (err) {
    console.error(err);
  }
}

module.exports = seedUsers;
