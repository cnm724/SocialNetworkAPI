const connection = require('../config/connection');
const { User } = require('../models');

connection.on('error', (err) => console.error(err));

connection.once('open', async () => {
  console.log('connected');

  // Delete the collections if they exist
  const collections = ['users', 'thoughts', 'reactions'];
  for (const collection of collections) {
    const collectionCheck = await connection.db.listCollections({ name: collection }).toArray();
    if (collectionCheck.length) {
      await connection.dropCollection(collection);
    }
  }

  // Seed data
  await seedData(User, users);

  console.info('Seeding complete! 🌱');
  process.exit(0);
});

const seedData = async (Model, data) => {
  try {
    await Model.insertMany(data);
    console.log(`Mock data for ${Model.modelName} is seeded from seed script.`);
  } catch (err) {
    console.error(`Error seeding ${Model.modelName}:`, err);
  }
};

// User seeds
const users = [
  { username: "aaa", email: "aaa@email.com" }
]
