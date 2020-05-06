const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

// GET /users
router.get('/get', userController.getUsers);

// POST /new users
router.post('/post', userController.createUsers);

module.exports = router;