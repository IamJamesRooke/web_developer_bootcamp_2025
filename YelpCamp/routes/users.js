const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const users = require('../controllers/users')

router.get('/register', users.renderRegister);

router.post('/register', catchAsync(users.register));

router.get('/login', users.renderLoginForm);

router.post('/login', users.loginUser);

router.get('/logout', users.logoutUser); 

module.exports = router;