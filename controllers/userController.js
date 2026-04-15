const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.showLogin = (req, res) => {
    res.render('trades/users/login');
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
        res.redirect('/users/login');
    });
};

exports.profile = (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/users/login');
    }
    res.render('trades/users/profile', { name: req.session.userName });
};
