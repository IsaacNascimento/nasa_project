const { getAllPlanets } = require('../../models/planetsModel');

async function httpGetAllPlanets(req, res) {
    const planets = await getAllPlanets();
    return res.status(200).json(planets);
};

module.exports = { httpGetAllPlanets };
