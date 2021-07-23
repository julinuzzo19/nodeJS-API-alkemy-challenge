const {Router} = require('express');
const {
  createCharacter,
  updateCharacter,
  deleteCharacter,
  getCharacterById,
  getCharacters
} = require('../controllers/characterController');
const router = Router();
const verifyToken = require('../middleware/verifyToken');

router.post('/', verifyToken, createCharacter);
router.put('/:id', verifyToken, updateCharacter);
router.delete('/:id', verifyToken, deleteCharacter);
router.get('/:id', verifyToken, getCharacterById);
router.get('/:name?/:age?/:movies?', verifyToken, getCharacters);

module.exports = router;
