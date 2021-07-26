'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Movie, {
        through: 'movie_characters',
        as:'movies',
        timestamps: false
      });
    }
  }
  Character.init(
    {
      image: DataTypes.STRING,
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      weight: DataTypes.INTEGER,
      history: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Character',
      timestamps: false
    }
  );
  return Character;
};