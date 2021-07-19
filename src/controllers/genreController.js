const {Genre} = require('../database/models');

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

    await Genre.update(
      {
        name,
        image
      },
      {
        where: {id: req.params.id}
      }
    );

    res.status(200).send({message: 'Data Update Successfully'});
  },
  deleteGenre: async (req, res) => {
    const response = await Genre.destroy({where: {id: req.params.id}});
    console.log(response);
    if (response) {
      res.status(200).send({message: 'Removed genre.'});
    } else {
      res.status(404).send({message: 'Error to delete genre.'});
    }
  }
};

module.exports = genreController;
