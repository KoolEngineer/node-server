const express = require('express');
const api = require('./routes/api');
const home = require('./routes/home');

const app = express();

app.use('/api', api);
app.use('/', home);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));