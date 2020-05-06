const express = require('express');

const chatController = require('../controllers/chat');

const router = express.Router();

// GET /messages
router.get('/get', chatController.getMessages);

// POST /new message
router.post('/post', chatController.createMessage);

module.exports = router;