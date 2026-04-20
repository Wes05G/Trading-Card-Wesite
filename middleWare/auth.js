const User = require('../models/user');

exports.isAuthor = async (req, res, next) => {
    if(!req.session.id) {
        return res.status(401).render('trades/error', {status: 401, message: 'Unauthorized' });
    }
    next();
};

exports.isLoggedIn = (req, res, next) => {
    if (!req.session.userId) {
        return res.redirect('/users/login');
    }
    next();
};