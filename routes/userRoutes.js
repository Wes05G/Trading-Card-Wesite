const express = require('express');
const controller = require('../controllers/userController');

const router = express.Router();

router.get('/login', controller.showLogin);
router.post('/login', controller.login);
router.get('/signup', controller.showSignup);
router.post('/signup', controller.signup);
router.get('/logout', controller.logout);
router.get('/profile', controller.profile);

module.exports = router;
