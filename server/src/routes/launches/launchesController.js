const {
  gettAllLaunches,
  existLaunchWithId,
  abortLaunchById,
  scheduleLaunch
} = require("../../models/launchesModel");

async function httpGetAllLanches(req, res) {
  const launches = await gettAllLaunches();
  return res.status(200).json(launches);
}

async function httpAddNewLaunche(req, res) {
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

  await scheduleLaunch(launch);
  return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
  const launchId = Number(req.params?.id);

  if (!existLaunchWithId(launchId)) {
    return res.status(404).json({
      error: 'Launch not found',
    });
  }

  const { aborted } = abortLaunchById(launchId) 
  return res.status(200).json(aborted);
}



module.exports = { httpGetAllLanches, httpAddNewLaunche, httpAbortLaunch };
