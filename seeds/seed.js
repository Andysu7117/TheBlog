const seedUser = require('./userData');
const seedBlogPost = require('./blogPostData');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  await seedBlogPost();
  console.log('\n----- DESINATIONS SEEDED -----\n');

  process.exit(0);
};

seedAll();
