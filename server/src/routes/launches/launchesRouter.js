const express = require('express');
const { httpGetAllLanches } = require('./launchesController');

const launchesRouter = express.Router();

launchesRouter.get('/launches', httpGetAllLanches);

module.exports = launchesRouter;