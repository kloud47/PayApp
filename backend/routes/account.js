const express = require('express');
const authMiddleware = require('../middleware/authenticate');
const router = express.Router();

const accRoutes = require('../controllers/cont_acc');

router.get('/balance', authMiddleware, accRoutes.getBalance);
router.post('/transfer', authMiddleware, accRoutes.postTransfer);

module.exports = router;