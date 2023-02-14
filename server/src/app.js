const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const app = express();

const planetsRouter = require('./routes/planets/planetsRouter');
const launchesRouter = require('./routes/launches/launchesRouter');

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(planetsRouter);
app.use(launchesRouter);

module.exports = app;