const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const logger = require('../middleware/logger');

const authRouter = require('../auth/auth-router');
const usersRouter = require('../routes/users-router');
const guidesRouter = require('../routes/guides-router');

const restricted = require('../middleware/auth-middleware');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger);

server.use('/api/auth', authRouter);
server.use('/api/users', restricted, usersRouter);
server.use('/api/guides', guidesRouter);

//make .use for how to listings??

server.get('/', (req, res) => {
    res.send('<h1>Server is Working!</h1>');
});

module.exports = server;