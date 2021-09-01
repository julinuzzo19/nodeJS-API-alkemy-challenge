const {Movie, Character, Sequelize} = require('../database/models');

const Op = Sequelize.Op;

const movieController = {
  createMovie: async (req, res) => {
    const {image, title, rating, GenreId, release_year, characters} = req.body;

    const response = await Movie.create({
      image,
      title,
      rating,
      GenreId,
      release_year
    });

    if (characters) {
      response.addCharacters(characters);
    }

    if (response) {
      res.status(201).send({message: 'Movie created'});
    } else {
      res.status(400).send({
        message: 'Movie not created'
      });
    }
  },

  updateMovie: async (req, res) => {
    const {image, title, rating, GenreId, release_year} = req.body;

    const response = await Movie.update(
      {image, title, rating, GenreId, release_year},
      {
        where: {id: req.params.id}
      }
    );
    if (response) {
      res.status(200).send({message: 'Movie updated'});
    } else {
      res.status(400).send({
        message: 'Movie not updated'
      });
    }
  },

  deleteMovie: async (req, res) => {
    const response = await Movie.destroy({where: {id: req.params.id}});
    if (response) {
      res.status(200).send({message: 'Movie deleted'});
    } else {
      res.status(400).send({
        message: 'Movie not deleted'
      });
    }
  },

  getMovies: async (req, res) => {
    let query = req.query;
    let responseMovie;

    if (query.title) {
      let title = query.title;

      responseMovie = await Movie.findAll({
        where: {
          title: {
            [Op.iLike]: `%${title}%`
          }
        }
      });
    } else if (query.genre) {
      responseMovie = await Movie.findAll({
        where: {
          GenreId: query.genre
        }
      });
    } else if (query.order) {
      responseMovie = await Movie.findAll({
        order: [['release_year', query.order]]
      });
    } else {
      responseMovie = await Movie.findAll({
        attributes: ['title', 'image', 'release_year']
      });
    }
    res.status(200).json(responseMovie);
  },

  getMovieById: async (req, res) => {
    const movieId = req.params.id;
    const response = await Movie.findByPk(movieId, {
      include: [
        {
          model: Character,
          as: 'characters',
          attributes: ['name', 'image'],
          through: {
            attributes: []
          }
        }
      ]
    });

    if (response) {
      res.status(200).json({response});
    }
  }
};

module.exports = movieController;
