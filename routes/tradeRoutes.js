const express = require('express');
const controller = require('../controllers/tradeController');
const { isLoggedIn } = require('../middleWare/auth');
const {isAuthor} = require('../middleWare/auth');

const router = express.Router();

router.get('/', controller.index);

router.get('/new', isLoggedIn, controller.new);
router.post('/add', isLoggedIn, controller.add);

router.get('/megaEvolution', controller.megaEvolution);
router.get('/megaEvolutions', controller.MEcards);
router.get('/phantasmalFlames', controller.PFcards);

router.get('/scarletViolet', controller.scarletViolet);
router.get('/blackBolt', controller.BBcards);
router.get('/whiteFlare', controller.WFcards);

router.get('/:id/edit', isLoggedIn, isAuthor, controller.edit);
router.get('/:id', controller.details);
router.post('/edit/:id', isLoggedIn, isAuthor, controller.update);
router.post('/delete/:id', isLoggedIn, isAuthor, controller.delete);

module.exports = router;