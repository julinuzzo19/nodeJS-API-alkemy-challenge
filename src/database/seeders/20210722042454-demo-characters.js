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
      'Characters',
      [
        {
          id: 100,
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lldeQ91GwIVff43JBrpdbAAeYWj.jpg',
          name: 'Jason Statham',
          age: 53,
          weight: 90,
          history:
            'Jason Statham (born 26 July 1967) is an English actor and martial artist, known for his roles in the Guy Ritchie crime films Lock, Stock and Two Smoking Barrels; Revolver; and Snatch.'
        },
        {
          id: 101,
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yVGF9FvDxTDPhGimTbZNfghpllA.jpg',
          name: 'Tom Hardy',
          age: 43,
          weight: 95,
          history:
            'Edward Thomas "Tom" Hardy (born 15 September 1977) is an English actor. He is best known for playing the title character in the 2009 British film Bronson, and for his roles in the films Star Trek Nemesis, RocknRolla, and Inception.'
        },
        {
          id: 102,
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg',
          name: 'Scarlet Johansson',
          age: 36,
          weight: 56,
          history:
            'Scarlett Johansson, born November 22, 1984, is an American actress, model and singer. She made her film debut in North (1994) and was later nominated for the Independent Spirit Award for Best Female Lead for her performance in Manny & Lo (1996).'
        },
        {
          id: 103,
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg',
          name: 'Robert Downey Jr.',
          age: 56,
          weight: 85,
          history:
            'Robert John Downey Jr. (born April 4, 1965) is an American actor and producer. Downey made his screen debut in 1970, at the age of five, when he appeared in his fathers film Pound, and has worked consistently in film and television ever since. '
        },
        {
          id: 104,
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lh5zibQXYH1MNqkuX8TmxyNYHhK.jpg',
          name: 'Alexandra Daddario',
          age: 35,
          weight: 52,
          history:
            'Alexandra Anna Daddario is an American actress. She is known for playing Annabeth Chase in the Percy Jackson film series, Blake Gaines in San Andreas (2015), Summer Quinn in Baywatch (2017), Emma Corrigan in Can You Keep a Secret?'
        },
        {
          id: 105,
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jpurJ9jAcLCYjgHHfYF32m3zJYm.jpg',
          name: 'Chris Hemsworth',
          age: 37,
          weight: 87,
          history:
            'Chris Hemsworth (born 11 August 1983) is an Australian actor. He is best known for his roles as Kim Hyde in the Australian TV series Home and Away (2004) and as Thor in the Marvel Cinematic Universe films Thor (2011), The Avengers (2012).'
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
