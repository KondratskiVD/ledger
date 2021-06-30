'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      name: 'John',
      password: '$2b$06$m3vZOR899cBULegcB/T4kOZkb4otQhso35cBqEJXALgCdQd4Bx0/O',
      email: 'demo@demo.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Vitaliy',
      password: '$2b$06$m3vZOR899cBULegcB/T4kOZkb4otQhso35cBqEJXALgCdQd4Bx0/O',
      email: 'test@test.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
