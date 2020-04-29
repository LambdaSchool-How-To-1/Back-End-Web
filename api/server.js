const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const logger = require('../middleware/looger');

const authRouter = require('../auth/auth-router');
const usersRouter = require('../routes/users-route');
const guidesRouter = require('../routes/guide-router');

const restricted = require('../middleware/auth-middleware');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger);

server.use('/api/auth', authRouter);
server.use('/api/users', restricted, usersRouter);
server.use('/api/guides', guidesRouter);

server.get('/', (req, res) => {
    res.send('Server is running');
});

module.exports = server; 

