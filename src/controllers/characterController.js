const {Character} = require('../database/models');

const characterController = {
  createCharacter: async (req, res) => {
    const {image, name, age, weight, history} = req.body;

    const brad = await Character.create({
      image,
      name,
      age,
      weight,
      history
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
  },

  getCharacters: async (req, res) => {
    const query = await Character.findAll();
    let responseCharacter = [];
    query.forEach((character) => {
      let {image, name} = character;
      let itemResponse = {image, name};
      responseCharacter.push(itemResponse);
    });

    res.json(responseCharacter);
  }
};

module.exports = characterController;
