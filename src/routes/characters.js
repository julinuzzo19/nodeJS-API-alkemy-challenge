const {Router} = require('express');
const routes = Router();

routes.get('/', (req, res) => {
  res.json('characters');
});

module.exports = routes;
