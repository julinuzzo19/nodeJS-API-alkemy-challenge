'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     
      this.hasMany(models.character);
      this.belongsTo(models.genre);

    }
  }
  movie.init(
    {
      image: DataTypes.STRING,
      title: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      rating: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'movie',
      timestamps: false
    }
  );
  return movie;
};
