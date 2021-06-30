'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert('Records', [{
    userId: 1,
    amount: 10000,
    income: true,
    description: 'Зарплата',
    categoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
     },
     {
      userId: 2,
      amount: 20000,
      income: true,
      description: 'Бабушкина пенсия',
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
       }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Records', null, {});
  }
};
