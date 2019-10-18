const express = require('express');
const bodyParse = require('body-parser');
const router = require('./src/routers/mainRouter');

const app = express();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true}));
app.use('/', router);
app.set('view engine', 'ejs');
app.use(express.static('public'));

module.exports = app;