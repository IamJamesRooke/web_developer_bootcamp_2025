const User = require('../models/user');
const passport = require('passport');


module.exports.renderRegister = (req, res) => {
    res.render('users/register');
}

module.exports.register = async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Welcome to Yelp Camp!');
            res.redirect('/campgrounds');
        })
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('register');
    }
}

module.exports.renderLoginForm = (req, res) => {
    res.render('users/login');
}

module.exports.loginUser = (req, res, next) => {
    passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }, (err, user, info) => {
        if (err) return next(err);
        if (!user) {
            req.flash('error', 'Invalid username or password');
            return res.redirect('/login');
        }
        req.logIn(user, (err) => {
            if (err) return next(err);
            req.flash('success', 'Welcome back!');
            const redirectUrl = req.session.returnTo || '/campgrounds';
            delete req.session.returnTo;
            res.redirect(redirectUrl);
        });
    })(req, res, next);
};

module.exports.logoutUser = (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Goodbye!');
        res.redirect('/campgrounds');
    });
}