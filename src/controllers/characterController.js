const {Sequelize, Character, Movie, Genre} = require('../database/models');
const Op = Sequelize.Op;
const characterController = {
  createCharacter: async (req, res) => {
    const {image, name, age, weight, history} = req.body;

    const response = await Character.create({
      image,
      name,
      age,
      weight,
      history
    });

    if (response) {
      res.status(201).json({
        message: 'Character created!',
        response
      });
    } else {
      res.status(400).json({
        message: 'Character has not been created'
      });
    }
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
      res.status(200).send({message: 'Character Updated!'});
    } else {
      res.status(404).send({message: 'Character has not been updated'});
    }
  },
  deleteCharacter: async (req, res) => {
    const response = await Character.destroy({where: {id: req.params.id}});

    if (response) {
      res.status(200).send({message: 'Character deleted!'});
    } else {
      res.status(400).send({message: 'Character has not been deleted.'});
    }
  },

  getCharacters: async (req, res) => {
    let query = req.query;
    let responseCharacter;
    if (query.name) {
      responseCharacter = await Character.findAll({
        where: {
          name: {
            [Op.iLike]: `%${query.name}%`
          }
        },
        attributes: ['name', 'image']
      });
    } else if (query.age) {
      responseCharacter = await Character.findAll({
        where: {
          age: query.age
        },
        attributes: ['name', 'image']
      });
    } else if (query.movies) {
      responseCharacter = await Character.findAll({
        attributes: ['name', 'image'],
        include: [
          {
            model: Movie,
            as: 'movies',
            through: {
              attributes: []
            },
            where: {
              id: query.movies
            },
            attributes: ['image', 'title'],

            include: [
              {
                model: Genre,
                attributes: ['name']
              }
            ]
          }
        ]
      });
    } else {
      responseCharacter = await Character.findAll({
        attributes: ['name', 'image']
      });
    }

    res.status(200).json(responseCharacter);
  },

  getCharacterById: async (req, res) => {
    const characterId = req.params.id;
    const response = await Character.findByPk(characterId, {
      include: [
        {
          model: Movie,
          as: 'movies',
          attributes: {exclude: ['GenreId']},
          through: {
            attributes: []
          },

          include: [
            {
              model: Genre,
              attributes: ['name', 'image']
            }
          ]
        }
      ]
    });

    if (response) {
      res.status(200).json({
        response
      });
    } else {
      res.status(404).json({
        message: 'Character not found'
      });
    }
  }
};

module.exports = characterController;
