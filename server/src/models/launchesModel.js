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

launches.set(launch.flightNumber, launch);

function existLaunchWithId(launchId) {
  return launches.has(launchId);
}

function gettAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunches(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customer: ["Zero to Mastery", "Nasa"],
      flightNumber: latestFlightNumber,
    })
  );
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
  addNewLaunches,
  abortLaunchById,
};
