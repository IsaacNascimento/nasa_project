require('dotenv').config();
const http = require('http');
const mongoose = require('mongoose');

const MONGODB_KEY = process.env.MONGODB_KEY;

const app = require('./app');

const { loadPlanetsData } = require('./models/planetsModel');

const MONGO_URL = `mongodb+srv://isaacsnascimento17:${MONGODB_KEY}@nasaproject.uuzx8es.mongodb.net/nasaProject?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
})

async function startServer() {
    await mongoose.connect(MONGO_URL);
    await loadPlanetsData();
};

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}... `);
    console.log(`Serving on: http://localhost:${PORT}`);
});

startServer();

