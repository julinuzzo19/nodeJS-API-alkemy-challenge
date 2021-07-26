const {Genre} = require('../database/models');

const genreController = {
  createGenre: async (req, res) => {
    const {name, image} = req.body;

    let response = await Genre.create({
      name,
      image
    });

    if (response) {
      res.status(201).json({status: 'sucess', message: 'Genre created!', response});
    } else {
      res.status(400).json({status: 400, message: 'Genre has not been created'});
    }
  },

  getById: async (req, res) => {
    const genreId = req.params.id;

    const response = await Genre.findByPk(genreId);

    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({message: 'Genre not found.'});
    }
  },

  getAll: async (req, res) => {
    const response = await Genre.findAll();
    res.status(200).json(response);
  },

  updateGenre: async (req, res) => {
    const {name, image} = req.body;

    const response = await Genre.update(
      {
        name,
        image
      },
      {
        where: {id: req.params.id}
      }
    );
    if (response) {
      res.status(200).send({message: 'Genre Updated!'});
    } else {
      res.status(400).send({message: 'Genre has not been updated'});
    }
  },
  deleteGenre: async (req, res) => {
    const response = await Genre.destroy({where: {id: req.params.id}});
    if (response) {
      res.status(200).send({message: 'Genre deleted!'});
    } else {
      res.status(404).send({message: 'Genre has not been deleted.'});
    }
  }
};

module.exports = genreController;
