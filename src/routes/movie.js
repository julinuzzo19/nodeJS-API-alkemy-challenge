const {Router} = require('express');
const router = Router();
const movieController = require('../controllers/movieController');


router.post('/', movieController.createMovie);
router.put('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);
router.get('/:name?/:genre?/:order?',movieController.getMovies)

module.exports = router;
