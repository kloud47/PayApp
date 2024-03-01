const { JWT_SECRET } = require('../config');
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        req.userID = decoded.userID;
        next();
    } catch (err) {
        return res.sendStatus(403);
    }
};

module.exports = authMiddleware;