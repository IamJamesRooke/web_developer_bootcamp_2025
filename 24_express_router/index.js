const express = require('express');
const app = express();

const shelterRoutes = require('./routes/shelters'); // Use require for consistency
const dogRoutes = require('./routes/dogs'); // Use require for consistency
const adminRoutes = require('./routes/admin')



app.use(`/shelters`, shelterRoutes);
app.use(`/dogs`, dogRoutes);
app.use(`/admin`, adminRoutes);




app.listen(port=3000, () => {
    console.log(`Serving app on localhost:${port}`);
});