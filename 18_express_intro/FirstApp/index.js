const express = require('express');
const app = express();

console.log('Registering middleware...');
app.use((req, res, next) => {
    console.log('We got a new request!');
    next();
});

app.get('/', (req, res) => {
    console.log('Handling GET request for /');
    res.send('Hello, we got your request! This is a response.');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});