const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middleware/auth.js');
const { submitRating } = require('../controllers/rating.js');
const { getUserByID, updateUserByID } = require('../controllers/userController');

router.get('/users/:id', authenticateJWT, getUserByID);
router.put('/users/:id', authenticateJWT, updateUserByID);
router.post('/rating', authenticateJWT, submitRating);

module.exports = router;
