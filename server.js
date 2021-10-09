const express = require('express');
const headphones = require('./headphones.json');

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
   res.set('Access-Control-Allow-Origin', '*');
   res.send('<h1>Femiconnect says hi...</h1>');
});

app.get('/headphones', (req, res) => {
   res.set('Access-Control-Allow-Origin', '*');
   res.send(headphones);
});

app.listen(port, () => {
   console.log(`App is listening on port ${port}`);
});
