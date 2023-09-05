const { User } = require('../models');

const userData = [
  {
    name: 'AndySu',
    email: 'andy.su7117@gmail.com',
    password: '$2a$10$e2Sdo5NYI/.btd9sUCIvJe/XjC6zsj1MUMd9MUlty29lwoolyFJTW',
  },
  {
    name: 'testuser1',
    email: 'testuser1@gmail.com',
    password: '$2a$10$e2Sdo5NYI/.btd9sUCIvJe/XjC6zsj1MUMd9MUlty29lwoolyFJTW',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
