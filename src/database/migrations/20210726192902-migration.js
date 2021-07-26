'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('Genres', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      name: Sequelize.STRING,
      image: Sequelize.STRING
    });

    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      image: Sequelize.STRING,
      title: Sequelize.STRING,
      rating: Sequelize.INTEGER,
      release_year: Sequelize.INTEGER,
      Genre_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Genres',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    });

    await queryInterface.createTable('Characters', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      image: Sequelize.STRING,
      name: Sequelize.STRING,
      age: Sequelize.INTEGER,
      weight: Sequelize.INTEGER,
      history: Sequelize.STRING
    });

    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      email: Sequelize.STRING,
      password: Sequelize.STRING
    });

    await queryInterface.createTable('movie_character', {
      CharacterId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Characters',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      MovieId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Movies',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
