const {Category} = require('../pg/models');

const sampleCategories = ['mexican', 'pizza', 'italian', 'chinese', 'thai', 'burgers', 'brunch', 'bakery', 'sandwiches', 'thai', 'vegetarian', 'comfort food', 'japanese', 'seafood', 'mediterranean', 'spanish', 'southern', 'cajun', 'pub', 'indian', 'halal', 'ethiopian', 'vegan', 'gastropub', 'greek', 'coffee', 'lebanese']

const createCategories = async (categories) => {
  for (let i of categories) {
    await Category.create(categories[i])
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
