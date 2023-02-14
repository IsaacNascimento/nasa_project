const { launches } = require('../../models/launchesModel');

function getAllLanches(req, res) {
    return res.status(200).json(Array.from(launches.values()));
};

module.exports = { getAllLanches };