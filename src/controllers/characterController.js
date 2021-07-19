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
  },
  updateCharacter: async (req, res) => {
    const {image, name, age, weight, history} = req.body;

    const response = await Character.update(
      {
        name,
        image,
        age,
        weight,
        history
      },
      {
        where: {id: req.params.id}
      }
    );

    if (response) {
      res.status(200).send({message: 'Data Update Successfully'});
    } else {
      res.status(404).send({message: 'Data cannot updated'});
    }
  },
  deleteCharacter: async (req, res) => {
    const response = await Character.destroy({where: {id: req.params.id}});

    if (response) {
      res.status(200).send({message: 'Removed character.'});
    } else {
      res.status(404).send({message: 'Error to delete character.'});
    }
  }
};

module.exports = characterController;
