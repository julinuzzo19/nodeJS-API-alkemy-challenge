'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsToMany(models.movie, {through: 'character_movie', timestamps:false});
      this.belongsToMany(models.movie,{as:'movie_id',through:'movie_character',timestamps:false})
    }
  }
  character.init(
    {
      image: DataTypes.STRING,
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      weight: DataTypes.INTEGER,
      history: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'character',
      timestamps: false
    }
  );
  return character;
};
