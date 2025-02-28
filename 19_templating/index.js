const express = require('express');
const app = express();
const path = require('path')

app.set('viewengine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.listen(port=8080, () =>{
    console.log(`Listening on port ${port}.`)
})