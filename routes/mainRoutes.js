const express = require("express");
const controller = require("../controllers/mainController");

const router = express.Router();

router.get('/', controller.index);
router.get('/index', controller.index);

router.get('/trades', (req, res) => res.redirect('/trades'));

router.get('/megaEvolution', controller.megaEvolution);
// Mega Evolution Subsets / Cards
router.get('/megaEvolutions', controller.MEcards);
router.get('/phantasmalFlames', controller.PFcards);

router.get('/scarletViolet', controller.scarletViolet);
// Scarlet & Violet Subsets / Cards
router.get('/blackBolt', controller.BBcards);
router.get('/whiteFlare', controller.WFcards);


module.exports = router;