'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Movies',
      [
        {
          id: 100,
          title: 'The Avengers',
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
          release_year: 2012,
          rating: 4,
          GenreId: 101
        },
        {
          id: 101,
          title: 'Snatch',
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/56mOJth6DJ6JhgoE2jtpilVqJO.jpg',
          release_year: 2000,
          rating: 8,
          GenreId: 102
        },
        {
          id: 102,
          title: 'The Meg',
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xqECHNvzbDL5I3iiOVUkVPJMSbc.jpg',
          release_year: 2018,
          rating: 9,
          GenreId: 102
        },
        {
          id: 103,
          title: 'Fast & Furious 6',
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/n31VRDodbaZxkrZmmzyYSFNVpW5.jpg',
          release_year: 2013,
          rating: 10,
          GenreId: 101
        },
        {
          id: 104,
          title: 'Thor',
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg',
          release_year: 2011,
          rating: 2,
          GenreId: 101
        },
        {
          id: 105,
          title: 'Men in Black: International',
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dPrUPFcgLfNbmDL8V69vcrTyEfb.jpg',
          release_year: 2019,
          rating: 7,
          GenreId: 100
        },
        {
          id: 106,
          title: 'Mad Max: Fury Road',
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg',
          release_year: 2015,
          rating: 10,
          GenreId: 100
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
