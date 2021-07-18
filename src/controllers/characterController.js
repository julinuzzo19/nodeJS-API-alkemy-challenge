const {sequelize, Character} = require('../database/models');

const characterController = {
  createCharacter: async (req, res) => {
    const brad = await Character.create({
      image: '2s',
      name: 'Brad Pitt',
      age: 59,
      weight: 80,
      history: 'brad story'
    });

    return res.json(brad);
  }
};

module.exports = characterController;
