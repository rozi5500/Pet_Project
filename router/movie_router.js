const { Router } = require('express');
const { movieController } = require('../controller')

const router = Router();

router.get('/get', movieController.getAllMovies)
router.post('/add', movieController.addMovie)
router.get('/get/:id', movieController.addMovie)
router.put('/update/:id', movieController.updateMovie)
router.delete('/delete/:id', movieController.deleteMovie)

module.exports = router;