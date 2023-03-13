const {
  gettAllLaunches,
  addNewLaunches,
} = require("../../models/launchesModel");

function httpGetAllLanches(req, res) {
  return res.status(200).json(gettAllLaunches()) || function () {};
}

function httpAddNewLaunche(req, res) {
  const launch = req.body;

  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.target ||
    !launch.launchDate 
  ) {
    return res.status(400).json({
        error: 'Missing required Launch property'
    })
  }

  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
        error: 'Invalid launch date'
    })
  }

  addNewLaunches(launch);
  return res.status(201).json(launch);
}

module.exports = { httpGetAllLanches, httpAddNewLaunche };
