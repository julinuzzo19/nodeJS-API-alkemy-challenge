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

      this.hasMany(models.Character);
      this.belongsTo(models.Genre);
    }
  }
  Movie.init(
    {
      movieId: {
        primaryKey: true,
        type: DataTypes.INTEGER,

        autoIncrement: true
      },
      image: DataTypes.STRING,
      title: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      rating: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Movie',
      timestamps: false
    }
  );
  return Movie;
};
