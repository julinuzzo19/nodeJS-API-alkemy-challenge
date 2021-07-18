const {sequelize, Genre} = require('../database/models');

const genreController = {
  createGenre: async (req, res) => {
    const {name, image} = req.body;

    let genero = await Genre.create({
      name,
      image
    });

    res.json(genero);
  },

  getById: async (req, res) => {
    const genreId = req.params.id;

    const element = await Genre.findByPk(genreId);

    res.json(element);
  },

  getAll: async (req, res) => {
    const element = await Genre.findAll();
    res.json(element);
  },

  updateGenre: async (req, res) => {
    const {name, image} = req.body;

    const response = await Genre.update(
      {
        name,
        image
      },
      {
        where: {genreId: req.params.id}
      }
    );

    res.status(200).send({message: 'Data Update Successfully'});
  }
};

module.exports = genreController;
