'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'movie_characters',
      [
        {
          CharacterId: 105,
          MovieId: 100
        },
        {
          CharacterId: 104,
          MovieId: 100
        },
        {
          CharacterId: 100,
          MovieId: 101
        },
        {
          CharacterId: 101,
          MovieId: 101
        },
        {
          CharacterId: 102,
          MovieId: 102
        },
        {
          CharacterId: 103,
          MovieId: 102
        },
        {
          CharacterId: 105,
          MovieId: 103
        },
        {
          CharacterId: 104,
          MovieId: 103
        },
        {
          CharacterId: 102,
          MovieId: 104
        },
        {
          CharacterId: 100,
          MovieId: 104
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
