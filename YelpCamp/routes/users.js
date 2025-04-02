const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const users = require('../controllers/users')

router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register))

router.route('/login')
    .get(users.renderLoginForm)
    .post(users.loginUser)

router.get('/logout', users.logoutUser); 

module.exports = router;