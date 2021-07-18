const {Router} = require('express');
const routes = Router();
const characterController = require('../controllers/characterController');

routes.get('/', characterController.createCharacter);

module.exports = routes;
