const express = require('express');
const controller = require('../controllers/userController');

const router = express.Router();

router.post('/login', controller.login);
router.post('/sign-up', controller.signup);
router.get('/logout', controller.logout);