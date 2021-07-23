'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'email@gmail.com',
          password: '$2b$10$KSb5AUDuGCuQcS5g7Iw2xuNbwGd7VCz7kRo1mZt9GxCm/Gd21n8qi' //hash="password"
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
