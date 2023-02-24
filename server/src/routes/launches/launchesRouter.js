const express = require('express');
const { httpGetAllLanches, httpAddNewLaunche } = require('./launchesController');

const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLanches);
launchesRouter.post('/',  httpAddNewLaunche);

module.exports = launchesRouter;