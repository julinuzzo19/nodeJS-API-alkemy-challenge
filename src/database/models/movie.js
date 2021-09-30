const {Sequelize} = require('sequelize');

const db = require('../config/db');
const Character = require('./character');
const Genre = require('./genre');

const Movie = db.define('Movie', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  title: Sequelize.STRING,
  image: Sequelize.STRING,
  release_year: Sequelize.INTEGER,
  rating: Sequelize.INTEGER
});

//relations
Movie.belongsToMany(Character, {through: 'movie_character'});
Character.belongsToMany(Movie, {through: 'movie_character'});
Movie.belongsTo(Genre);
Genre.hasMany(Movie);

module.exports = Movie;
