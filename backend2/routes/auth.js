const express = require('express');
const authController = require('../controllers/Cont_auth');
const checkAuth = require('../middleware/authenticate');

const router = express.Router();

router.post('/signin', authController.postSignin);
router.post('/signup', authController.postSignup);
router.put('/update', checkAuth, authController.updateUser);
router.get('/bulk', authController.getUser);

module.exports = router;