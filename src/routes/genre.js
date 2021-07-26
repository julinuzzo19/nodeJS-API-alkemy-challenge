const {Router} = require('express');
const router = Router();
const {
  createGenre,
  getAll,
  getById,
  updateGenre,
  deleteGenre
} = require('../controllers/GenreController');
const verifyToken = require('../middleware/verifyToken');

router.post('/', verifyToken, createGenre);
router.get('/:id', verifyToken, getById);
router.get('/', verifyToken, getAll);
router.put('/:id', verifyToken, updateGenre);
router.delete('/:id', verifyToken, deleteGenre);

module.exports = router;
