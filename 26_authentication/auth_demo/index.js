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


app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    const hash = await bcrypt.hash(password, 12)
    const user = new User({
        username,
        password: hash
    })
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/')

})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
        const validPassword = await bcrypt.compare(password, user.password);
        if (validPassword) {
            req.session.user_id = user._id;
            return res.redirect('/secret');
        }
    }
    res.redirect('/login');
})

app.get('/secret', (req, res) => {
    if (!req.session.user_id) {
        return res.redirect('/login');
    }
    res.send('secret'); // Ensure you have a 'secret.ejs' file in your views folder
})



app.listen(3000, () => {
    console.log('Serving app on Port 3000')
})