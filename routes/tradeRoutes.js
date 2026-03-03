const express = require('express');
const controller = require('../controllers/tradeController');

const router = express.Router();

router.get('/new', controller.new);
router.post('/add', controller.add);

router.get('/:id', controller.details);
router.get('/:id/edit', controller.edit);

router.post('/edit/:id', controller.update);
router.post('/delete/:id', controller.delete);

module.exports = router;