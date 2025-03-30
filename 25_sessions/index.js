const express = require('express');
const app = express();

const session = require('express-session');

app.use(session({secret: 'sessionsecret'}));

app.get('/viewcount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    
    res.send(`Page Views: ${req.session.count}`)
})



app.listen(3000, () => {
    console.log('Listening on PORT 3000')
})