const express = require('express');
const app = express();

const shelterRoutes = require('./routes/shelters');
const dogRoutes = require('./routes/dogs');
const adminRoutes = require('./routes/admin');

app.use(`/shelters`, shelterRoutes);
app.use(`/dogs`, dogRoutes);
app.use(`/admin`, adminRoutes);

// COOKIES START
const cookieParser = require('cookie-parser');
app.use(cookieParser('secret-key'))

app.get('/greet', (req, res) => {
   const { name = 'No Name'} = req.cookies;
    res.send(`"Hello ${name}!"`)
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'James Rooke');
    res.cookie('color', 'Blue');
    res.send('Cookie Sent');
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true})
    res.send('Cookie Signed')
})

app.get('/verifyfruit', (req, res) => {
    console.log(req.cookies);
    res.send(req.signedCookies);
})
// COOKIES END

app.listen(port=3000, () => {
    console.log(`Serving app on localhost:${port}`);
});