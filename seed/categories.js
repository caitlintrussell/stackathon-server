const {Category} = require('../pg/models');

const sampleCategories = ['mexican', 'pizza', 'italian', 'chinese', 'thai', 'burgers', 'brunch', 'bakery', 'deli', 'vegetarian', 'comfort food', 'japanese', 'seafood', 'mediterranean', 'spanish', 'southern', 'cajun', 'pub', 'indian', 'halal', 'ethiopian', 'vegan', 'gastropub', 'lebanese']

const createCategories = async (categories) => {
  for (let category of categories) {
    await Category.create({name: category})
  }
}

const seedCategories = async () => {
  try {
    console.log('Seeding categories...');
    await createCategories(sampleCategories)
  }

  catch (err) {
    console.error(err);
  }
}
module.exports = seedCategories;
