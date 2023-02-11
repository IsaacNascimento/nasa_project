const http = require('http');

const app = require('./app');

const { loadPlanetsData } = require('./models/planetsModel');

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

async function startServer() {
    await loadPlanetsData();
};

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}... `);
    console.log(`Serving on: http://localhost:${PORT}`);
});

startServer();

