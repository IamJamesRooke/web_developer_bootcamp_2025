const express = require('express');
const app = express();
const session = require('express-session');

const sessionOptions = { 
    secret: 'sessionsecret', 
    resave: false, 
    saveUninitialized: true };

app.use(session(sessionOptions));

app.get('/viewcount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    
    res.send(`Page Views: ${req.session.count}`)
})

app.get('/register', (req, res) => {
    const { username = 'anonymous' } = req.query;
    req.session.username = username;
    res.redirect('/greet')
})

app.get('/greet', (req, res) => {
    const {username} = req.session;
    res.send(`Hey ${username}.`)
})

app.listen(3000, () => {
    console.log('Listening on PORT 3000')
})