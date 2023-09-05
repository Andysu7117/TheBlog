const seedUser = require('./userData');

const sequelize = require('../config/connection');

const seedAll = async () => {
  try {
    sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    seedUser();
    console.log('\n----- USERS SEEDED -----\n');
  } catch (err) {
    console.err(err);
  }

  process.exit(0);
};

seedAll();
