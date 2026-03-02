const express = require("express");
const controller = require("../controllers/mainController");

const router = express.Router();

router.get('/', controller.index);

router.get('/index',controller.index);

//router.get('/about', constroller.about);

//router.get('/contact', controller.contact);

router.get('/trades', controller.trades);

router.get('/megaEvolution', controller.megaEvolution);
    //Mega Evolution Suset and Cards
    router.get('/megaEvolutions', controller.cards);

router.get('/scarletViolet', controller.scarletViolet);
    //Scarlet Violet Subset and Cards

router.get('/trade-detials/:id', controller.cards);

module.exports = router;
