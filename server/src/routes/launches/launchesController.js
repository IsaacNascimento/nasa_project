const { gettAllLaunches, addNewLaunches } = require('../../models/launchesModel');

function httpGetAllLanches(req, res) {
    return res.status(200).json(gettAllLaunches()) || function(){};
};

function httpAddNewLaunche(req, res) {
    const launch = req.body;
    launch.launchDate = new Date(launch.launchDate);
    addNewLaunches(launch)
    return res.status(201).json(launch)
}

module.exports = { httpGetAllLanches, httpAddNewLaunche };