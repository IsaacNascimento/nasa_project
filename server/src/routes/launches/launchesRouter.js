const express = require('express');
const { getAllLanches } = require('./launchesController');

const launchesRouter = express.Router();

launchesRouter.get('/launches', getAllLanches);

module.exports = launchesRouter;