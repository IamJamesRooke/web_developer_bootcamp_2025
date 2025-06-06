const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs'); // Fixed typo: 'viewengine' to 'view engine'
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get('/cats', (req, res) => {
    const cats = ['Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'];
    res.render('cats.ejs', { cats });
});

app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.render('random.ejs', { randomNumber: randomNumber });
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if(data) {
        res.render('subreddit.ejs', { ...data });
    } else {
        res.render('notfound.ejs', { subreddit });
    }
});

app.listen(8080, () => {
    console.log(`Listening on port 8080.`);
});