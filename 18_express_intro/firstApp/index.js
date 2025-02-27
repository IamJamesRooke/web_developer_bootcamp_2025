const express = require('express');
const app = express();
console.dir(app);

// This runs every time the webpage is called.
app.use((req, res) => {
    console.log('NEW REQUEST');
    res.send('<h1>---NEW RESPONSE---</h1>');
})

app.listen(port=8080, () => {
    console.log(`LISTENING ON PORT ${port}`);
})

// app.get('*', (req, res) => {
//     Change that line to exactly this:
    
// app.get(/(.*)/, (req, res) => {