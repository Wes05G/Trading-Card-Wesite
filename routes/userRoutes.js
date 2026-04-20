const express = require('express');
const controller = require('../controllers/userController');
const { isLoggedIn } = require('../middleWare/auth');

const router = express.Router();

router.get('/login', controller.showLogin);
router.post('/login', controller.login);
router.get('/signup', controller.showSignup);
router.post('/signup', controller.signup);
router.get('/logout', isLoggedIn, controller.logout);
router.get('/profile', isLoggedIn, controller.profile);

module.exports = router;
