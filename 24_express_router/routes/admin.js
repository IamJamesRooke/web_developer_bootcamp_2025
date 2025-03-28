const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    if(req.query.isAdmin) {
        next();
    }
    res.send('Not Admin')
})

router.get('/topsecret', (req, res) => {
    res.send('TOP SECRET')
})

router.get('/deleteall', (req, res) => {
    res.send('Deleted Everything')
})

module.exports = router;
