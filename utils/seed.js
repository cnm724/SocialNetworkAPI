const mongoose = require('mongoose');
const connection = require('../config/connection');
const { User, Thought } = require('../models');
const reactionSchema = require('../models/Reaction');

// Define the Reaction model using reactionSchema
const Reaction = mongoose.model('Reaction', reactionSchema);

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
  const userDocs = await User.find(); // Get the users to use their IDs in thoughts
  await seedThoughts(userDocs);
  await seedData(Reaction, reactions);

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

const seedThoughts = async (users) => {
  try {
    const thoughts = users.map(user => ({
      thoughtText: `test ${user.username}`,
      username: user._id, // Reference ObjectId
    }));

    await Thought.insertMany(thoughts);
    console.log('Mock data for Thought is seeded from seed script.');
  } catch (err) {
    console.error('Error seeding Thought:', err);
  }
};

// User seeds
const users = [
  { username: "aaa", email: "aaa@email.com" },
  { username: "bbb", email: "bbb@email.com" },
  { username: "ccc", email: "ccc@email.com" },
  { username: "ddd", email: "ddd@email.com" },
];

// Reaction seeds
const reactions = [
  { reactionBody: "Reaction aaa", username: "aaa" },
  { reactionBody: "Reaction bbb", username: "bbb" },
  { reactionBody: "Reaction ccc", username: "ccc" },
  { reactionBody: "Reaction ddd", username: "ddd" },
];
