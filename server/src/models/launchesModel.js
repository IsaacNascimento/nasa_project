const launches = new Map();

const launch = {
    flightNumber: 100,
    mission: "Kepler exploration",
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2023'),
    destination: 'Kepler-442 b',
    customer: ['Nasa', 'ZTM'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

module.exports = { launches };
