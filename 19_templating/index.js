const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs'); // Fixed typo: 'viewengine' to 'view engine'
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.render('random.ejs', { randomNumber: randomNumber });
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit.ejs', { subreddit });
});

app.listen(8080, () => {
    console.log(`Listening on port 8080.`);
});