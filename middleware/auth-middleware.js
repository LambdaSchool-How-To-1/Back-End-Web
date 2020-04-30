const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../auth/secret');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ you: "Shall not pass!" });
            } else {
                req.user = decodedToken;
            }
            next();
        });
    } else {
        res.status(400).json({ message: 'no credentials provided' });
    }
};