const express = require('express');
const cors = require('cors')
const morgan = require('morgan');
const app = express();
const routeHandler = require('./routes');

app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1', routeHandler);

module.exports = app;
