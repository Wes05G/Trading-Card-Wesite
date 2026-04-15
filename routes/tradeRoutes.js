const express = require('express');
const controller = require('../controllers/tradeController');

const router = express.Router();

router.get('/', controller.index);

router.get('/new', controller.new);
router.post('/add', controller.add);

router.get('/megaEvolution', controller.megaEvolution);
router.get('/megaEvolutions', controller.MEcards);
router.get('/phantasmalFlames', controller.PFcards);

router.get('/scarletViolet', controller.scarletViolet);
router.get('/blackBolt', controller.BBcards);
router.get('/whiteFlare', controller.WFcards);

router.get('/:id/edit', controller.edit);
router.get('/:id', controller.details);
router.post('/edit/:id', controller.update);
router.post('/delete/:id', controller.delete);

module.exports = router;