const express = require("express");
const controller = require("../controllers/mainController");

const router = express.Router();

router.get('/', controller.index);
router.get('/index', controller.index);

router.get('/about', controller.about);
router.get('/contact', controller.contact);

router.get('/newTrade', (req, res) => res.redirect('/trade/new'));

router.get('/trades',controller.trades);

router.get('/megaEvolution', controller.megaEvolution);
    // Mega Evolution Subsets / Cards
    router.get('/megaEvolutions', controller.MEcards);
    router.get('/phantasmalFlames', controller.PFcards);

router.get('/scarletViolet', controller.scarletViolet);
    // Scarlet & Violet Subsets / Cards
    router.get('/blackBolt', controller.BBcards);
    router.get('/whiteFlare', controller.WFcards);


module.exports = router;