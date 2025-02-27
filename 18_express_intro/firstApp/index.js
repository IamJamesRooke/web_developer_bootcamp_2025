const express = require('express');
const app = express();
console.dir(app);

// // This runs every time the webpage is called.
// app.use((req, res) => {
//     console.log('NEW REQUEST');
//     res.send('<h1>---NEW RESPONSE---</h1>');
// })

app.get('/', (req, res) => {
    console.log('HOME')
    res.send('HOME')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    console.log(req.params)
    res.send(`<h1>Browsing ${subreddit} subreddit.</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    console.log(req.params)
    res.send(`<h1>Browsing ${subreddit} subreddit.</h1><br><h2>Post ID: ${postId}</h2>`);
})

app.get('/cats', (req, res) => {
    console.log('CAT REQUEST')
    res.send('MEOW!')
})

app.get('/dogs', (req, res) => {
    console.log('DOG REQUEST')
    res.send('WOOF!')
})

app.get(/(.*)/, (req, res) => {
    console.log('UNKNOWN PATH')
    res.send('UNKNOWN PATH')
})

app.listen(port=8080, () => {
    console.log(`LISTENING ON PORT ${port}`)
})