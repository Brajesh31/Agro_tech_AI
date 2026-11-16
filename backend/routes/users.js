const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middleware/auth.js');
const { submitRating } = require('../controllers/rating.js');
const { getUserByID } = require('../controllers/userController');

router.get('/users/:id', authenticateJWT, getUserByID);
router.post('/rating', authenticateJWT, submitRating);

module.exports = router;
