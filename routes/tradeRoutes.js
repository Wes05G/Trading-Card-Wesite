const express = require('express');
const controller = require('../controllers/tradeController')
const router = express.Router();


router.get('/', controller.index);

router.get('/megaEvolution', controller.megaEvolution);

router.get('/scarletViolet', controller.scarletViolet);

router.get('/:id', controller.edit)

router.post('/add', controller.add);

router.post('/edit/:id', controller.update);

router.post('/delete/:id', controller.delete);


module.exports = router;

//add "delete", "add", and "edit/update" 