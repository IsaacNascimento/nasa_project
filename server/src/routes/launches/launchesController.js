const { gettAllLaunches } = require('../../models/launchesModel');

function httpGetAllLanches(req, res) {
    return res.status(200).json(gettAllLaunches());
};

module.exports = { httpGetAllLanches };