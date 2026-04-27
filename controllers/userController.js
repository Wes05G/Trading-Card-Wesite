const bcrypt = require('bcrypt');
const User = require('../models/user');
const Wishlist = require('../models/wishlists');
const Trade = require('../models/trade');

exports.showLogin = (req, res) => {
    const success = req.query.loggedout ? 'Logged out successfully!' : null;
    res.render('trades/users/login', { success });
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.render('trades/users/login', { error: 'Incorrect credentials' });
        }
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            req.session.userId = user._id;
            req.session.userName = user.name;
            req.flash('success', 'Logged in successfully!');
            res.redirect('/users/profile');
        } else {
            res.render('trades/users/login', { error: 'Incorrect credentials' });
        }
    } catch (err) {
        res.status(500).render('trades/error', { status: 500, message: err.message });
    }
};

exports.showSignup = (req, res) => {
    res.render('trades/users/signUp');
};

exports.signup = async (req, res) => {
    try {
        const { username, email, password, confirmPassword } = req.body;
        if (password !== confirmPassword) {
            return res.render('trades/users/signUp', { error: 'Passwords do not match' });
        }
        const hashed = await bcrypt.hash(password, 10);
        await User.create({ name: username, email, password: hashed });
        res.redirect('/users/login');
    } catch (err) {
        res.status(500).render('trades/error', { status: 500, message: err.message });
    }
};

exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/users/login?loggedout=true');
    });
};

exports.profile = async (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/users/login');
    }
    try {
        const userId = String(req.session.userId);
        const user = await User.findById(req.session.userId);
        const wishlist = await Wishlist.findOne({ userId });
        const wishItems = wishlist ? wishlist.cards : [];
        const wishlistCards = wishItems.length ? await Trade.find({ id: { $in: wishItems } }) : [];
        res.render('trades/users/profile', { user, wishlistCards });
    } catch (err) {
        res.status(500).render('trades/error', { status: 500, message: err.message });
    }
};
