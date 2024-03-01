const express = require("express");
const router = express.Router();

const authRoutes = require('./auth');
const accountRoutes = require('./account');

router.use('/user', authRoutes);
router.use('/account', accountRoutes);

module.exports = router;