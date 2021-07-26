'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Character, {
        through: 'movie_characters',
        as: 'characters',
        timestamps: false
      });
      this.belongsTo(models.Genre);
    }
  }
  Movie.init(
    {
      image: DataTypes.STRING,
      title: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      release_year: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Movie',
      timestamps: false
    }
  );
  return Movie;
};
