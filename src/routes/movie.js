const {Router} = require('express');
const router = Router();
const verifyToken = require('../middleware/verifyToken');
const {
  createMovie,
  updateMovie,
  deleteMovie,
  getMovieById,
  getMovies
} = require('../controllers/movieController');

router.post('/', verifyToken, createMovie);
router.put('/:id', verifyToken, updateMovie);
router.delete('/:id', verifyToken, deleteMovie);
router.get('/:id', verifyToken, getMovieById);
router.get('/:title?/:genre?/:order?', verifyToken, getMovies);

module.exports = router;
