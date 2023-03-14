const express = require('express');
const { httpGetAllLanches, httpAddNewLaunche, httpAbortLaunch } = require('./launchesController');

const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLanches);
launchesRouter.post('/',  httpAddNewLaunche);
launchesRouter.delete('/:id',  httpAbortLaunch);

module.exports = launchesRouter;