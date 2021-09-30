const db = require('../config/db');

const User = require('../models/user');
const Genre = require('../models/genre');
const Movie = require('../models/movie');
const Character = require('../models/character');

async function seedingDb() {
  try {
    await db.sync();
    console.log('Connection has been successfully');
  } catch (error) {
    console.error('Unable to connect to database:', error);
  }

  const cantMovies = await Movie.count();

  if (cantMovies == 0) {
    await Promise.all([
      Genre.create({
        id: 100,
        name: 'Action',
        image:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg'
      }),
      Genre.create({
        id: 101,
        name: 'Comedy',
        image:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/v5cC47udLnyp1zuwqLPBjGvmOi7.jpg'
      }),
      Genre.create({
        id: 102,
        name: 'Drama',
        image:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg'
      }),
      User.create({
        email: 'user@gmail.com',
        password: '$2b$10$KSb5AUDuGCuQcS5g7Iw2xuNbwGd7VCz7kRo1mZt9GxCm/Gd21n8qi' //hash="password"
      }),

      Character.create({
        image:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lldeQ91GwIVff43JBrpdbAAeYWj.jpg',
        name: 'Jason Statham',
        age: 53,
        weight: 90,
        history:
          'Jason Statham (born 26 July 1967) is an English actor and martial artist, known for his roles in the Guy Ritchie crime films Lock, Stock and Two Smoking Barrels; Revolver; and Snatch.'
      }),
      Character.create({
        image:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yVGF9FvDxTDPhGimTbZNfghpllA.jpg',
        name: 'Tom Hardy',
        age: 43,
        weight: 95,
        history:
          'Edward Thomas "Tom" Hardy (born 15 September 1977) is an English actor. He is best known for playing the title character in the 2009 British film Bronson, and for his roles in the films Star Trek Nemesis, RocknRolla, and Inception.'
      }),
      Character.create({
        image:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg',
        name: 'Scarlet Johansson',
        age: 36,
        weight: 56,
        history:
          'Scarlett Johansson, born November 22, 1984, is an American actress, model and singer. She made her film debut in North (1994) and was later nominated for the Independent Spirit Award for Best Female Lead for her performance in Manny & Lo (1996).'
      }),
      Character.create({
        image:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg',
        name: 'Robert Downey Jr.',
        age: 56,
        weight: 85,
        history:
          'Robert John Downey Jr. (born April 4, 1965) is an American actor and producer. Downey made his screen debut in 1970, at the age of five, when he appeared in his fathers film Pound, and has worked consistently in film and television ever since. '
      }),
      Character.create({
        image:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lh5zibQXYH1MNqkuX8TmxyNYHhK.jpg',
        name: 'Alexandra Daddario',
        age: 35,
        weight: 52,
        history:
          'Alexandra Anna Daddario is an American actress. She is known for playing Annabeth Chase in the Percy Jackson film series, Blake Gaines in San Andreas (2015), Summer Quinn in Baywatch (2017), Emma Corrigan in Can You Keep a Secret?'
      }),
      Character.create({
        image:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jpurJ9jAcLCYjgHHfYF32m3zJYm.jpg',
        name: 'Chris Hemsworth',
        age: 37,
        weight: 87,
        history:
          'Chris Hemsworth (born 11 August 1983) is an Australian actor. He is best known for his roles as Kim Hyde in the Australian TV series Home and Away (2004) and as Thor in the Marvel Cinematic Universe films Thor (2011), The Avengers (2012).'
      }),

      Movie.create({
        title: 'The Avengers',
        image:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
        release_year: 2012,
        rating: 4,
        GenreId: 101
      }),
      Movie.create({
        title: 'Snatch',
        image:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/56mOJth6DJ6JhgoE2jtpilVqJO.jpg',
        release_year: 2000,
        rating: 8,
        GenreId: 102
      }),
      Movie.create({
        title: 'The Meg',
        image:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xqECHNvzbDL5I3iiOVUkVPJMSbc.jpg',
        release_year: 2018,
        rating: 9,
        GenreId: 102
      }),
      Movie.create({
        title: 'Fast & Furious 6',
        image:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/n31VRDodbaZxkrZmmzyYSFNVpW5.jpg',
        release_year: 2013,
        rating: 10,
        GenreId: 101
      }),
      Movie.create({
        title: 'Thor',
        image:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg',
        release_year: 2011,
        rating: 2,
        GenreId: 101
      }),
      Movie.create({
        title: 'Men in Black: International',
        image:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dPrUPFcgLfNbmDL8V69vcrTyEfb.jpg',
        release_year: 2019,
        rating: 7,
        GenreId: 100
      }),
      Movie.create({
        title: 'Mad Max: Fury Road',
        image:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg',
        release_year: 2015,
        rating: 10,
        GenreId: 100
      })
    ]);
  }
}

module.exports = {seedingDb};
