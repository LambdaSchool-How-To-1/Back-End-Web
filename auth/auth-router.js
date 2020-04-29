const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = require('express').Router();

const { jwtSecret } = require('../api/secrets');
const Users = require('./auth-model');

router.post('/users/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    Users.add(user)
    .then(saved => {
        res.status(201).json(saved);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

router.post('/users/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);
            res.status(200).json({ message: `Welcome ${user.username}`, token });
        } else {
            res.status(401).json({ message: "You shall not pass" });
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
    };
    const options = {
        expiresIn: '1d'
    };
    return jwt.sign(payload, jwtSecret, options);
}

module.exports = router; 


