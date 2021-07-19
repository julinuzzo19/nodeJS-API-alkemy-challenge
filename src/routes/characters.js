const {Router} = require('express');
const router = Router();
const CharacterController = require('../controllers/characterController');

router.post('/', CharacterController.createCharacter);
router.put('/:id', CharacterController.updateCharacter);
router.delete('/:id', CharacterController.deleteCharacter);
module.exports = router;
