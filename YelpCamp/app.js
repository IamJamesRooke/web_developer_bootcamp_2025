// Express Imports
const express = require('express');
const app = express();
const path = require('path');

// EJS Imports
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Home Route
app.get('/', (req, res) => {	
    res.render('home');
});

// Listen on Port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});