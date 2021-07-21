const {Router} = require('express');
const characterController = require('../controllers/characterController');
const router = Router();

router.post('/', characterController.createCharacter);
router.put('/:id', characterController.updateCharacter);
router.delete('/:id', characterController.deleteCharacter);
router.get('/', characterController.getCharacters);
module.exports = router;
