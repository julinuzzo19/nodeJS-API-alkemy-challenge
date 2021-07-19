const {Movie} = require('../database/models');

const movieController = {
  createMovie: async (req, res) => {
    const {image, title, rating} = req.body;

    const response = await Movie.create({image, title, rating});

    if (response) {
      res.status(201).send({message: 'Movie created'});
    } else {
      res.status(400).send({
        message: 'Movie not created'
      });
    }
  },

  updateMovie: async (req, res) => {
    const {image, title, rating} = req.body;

    const response = await Movie.update(
      {image, title, rating},
      {
        where: {id: req.params.id}
      }
    );
    if (response) {
      res.status(200).send({message: 'Movie updated'});
    } else {
      res.status(404).send({
        message: 'Movie not updated'
      });
    }
  },

  deleteMovie: async (req, res) => {
    const response = await Movie.delete({where: {id: req.params.id}});
    if (response) {
      res.status(200).send({message: 'Movie deleted'});
    } else {
      res.status(404).send({
        message: 'Movie not deleted'
      });
    }
  }
};

module.exports = movieController;
