const express = require('express');
const app = express();
const User = require('./models/user')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session')

mongoose.connect('mongodb://localhost:27017/authDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    console.log('MONGO CONNECTION OPEN')
}).catch(err => {
    console.log('MONGO CONNECTION ERROR:', err)
});

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.urlencoded({extended: true}));
app.use(session({ secret: 'thisisabettersecret!', resave: false, saveUninitialized: true }));

const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login')
    }
    next();
}


app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    const user = new User({ username, password })
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/')

})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    foundUser = await User.findAndValidate(username, password)
    if (foundUser) {
        req.session.user_id = foundUser._id;
        res.redirect('/secret')
    } else {
        res.redirect('/login');
    }
})

app.post('/logout', (req, res) => {
    req.session.user_id = null;
    // req.session.destroy();
    res.redirect('/login');

})

app.get('/secret', requireLogin, (req, res) => {
    res.render('secret'); // Ensure you have a 'secret.ejs' file in your views folder
})
app.get('/topsecret', requireLogin, (req, res) => {
    res.send('TOP SECRET')
})


app.listen(3000, () => {
    console.log('Serving app on Port 3000')
})