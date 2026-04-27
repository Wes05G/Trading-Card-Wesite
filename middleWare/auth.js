const User = require('../models/user');
const Trade = require('../models/trade');

exports.isAuthor = async (req, res, next) => {
    const trade = await Trade.findOne({ id: String(req.params.id) });
    if (!trade || String(trade.userId) !== String(req.session.userId)) {
        return res.status(403).render('trades/error', { status: 403, message: 'You do not have permission to do that.' });
    }
    next();
};

exports.isLoggedIn = (req, res, next) => {
    if (!req.session.userId) {
        return res.redirect('/users/login');
    }
    next();
};
