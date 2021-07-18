const {Router} = require('express');
const router = Router();
const GenreController = require('../controllers/GenreController');

router.post('/', GenreController.createGenre);
router.get('/:id', GenreController.getById);
router.get('/', GenreController.getAll);
router.put('/:id',GenreController.updateGenre);

module.exports = router;
