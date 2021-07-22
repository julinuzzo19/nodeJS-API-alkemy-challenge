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
      'Movies',
      [
        {
          id: 100,
          title: 'The Avengers',
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
            release_year: 2012,
          GenreId:101
        },
        {
          id: 101,
          title: 'Snatch',
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/56mOJth6DJ6JhgoE2jtpilVqJO.jpg',
            release_year: 2000,
          GenreId:102
        },
        {
          id: 102,
          title: 'The Meg',
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xqECHNvzbDL5I3iiOVUkVPJMSbc.jpg',
            release_year: 2018,
          GenreId:102
        },
        {
          id: 103,
          title: 'Fast & Furious 6',
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/n31VRDodbaZxkrZmmzyYSFNVpW5.jpg',
            release_year: 2013,
          GenreId:101
        },
        {
          id: 104,
          title: 'Thor',
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg',
            release_year: 2011,
          GenreId:101
        },
        {
          id: 105,
          title: 'Men in Black: International',
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dPrUPFcgLfNbmDL8V69vcrTyEfb.jpg',
            release_year: 2019,
          GenreId:100
        },
        {
          id: 106,
          title: 'Mad Max: Fury Road',
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg',
            release_year: 2015,
          GenreId:100
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
