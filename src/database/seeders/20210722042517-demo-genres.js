'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Genres',
      [
        {
          id: 100,
          name: 'Action',
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg'
        },
        {
          id: 101,
          name: 'Comedy',
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/v5cC47udLnyp1zuwqLPBjGvmOi7.jpg'
        },
        {
          id: 102,
          name: 'Drama',
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg'
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
