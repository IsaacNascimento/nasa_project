const launchesDB = require('./launches.mongo');
const planets = require('./planets.mongo');

const DEFAULT_FLIGHT_NUMBER = 100;

const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: "Kepler exploration",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2023"),
  target: "Kepler-442 b",
  customer: ["Nasa", "ZTM"],
  upcoming: true,
  success: true,
};

let latestFlightNumber = launch.flightNumber;

saveLaunch(launch);

function existLaunchWithId(launchId) {
  return launches.has(launchId);
}

async function gettAllLaunches() {
  return await launchesDB
    .find({}, { '_id': 0, '__v': 0});
}

async function getLatestFlightNumber() {
  const latestLaunch = await launchesDB
    .findOne()
    .sort('-flightNumber');

  if (!latestFlightNumber) return DEFAULT_FLIGHT_NUMBER;

  return latestLaunch.flightNumber;
}

async function saveLaunch(launch) {
  const planet = await planets.findOne({
    keplerName: launch.target,
  });

  if (!planet) {
    throw new Error('No Matching planet found');
  }

  return await launchesDB.updateOne({
    flightNumber: launch.flightNumber,
  }, launch, {
    upsert: true,
  });
};

async function scheduleLaunch(launch) {
  const newFlightNumber = await getLatestFlightNumber() + 1;

  const newLaunch = Object.assign(launch, {
    success: true,
    upcoming: true,
    customers: ["Zero to Mastery", "Nasa"],
    flightNumber: newFlightNumber,
  });

  await saveLaunch(newLaunch);

}

function abortLaunchById(launchId) {
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;
  return { aborted };
}

module.exports = {
  existLaunchWithId,
  gettAllLaunches,
  abortLaunchById,
  saveLaunch,
  scheduleLaunch,
};
