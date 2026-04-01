const express = require('express');
const router = express.Router();

const { createUser, getUsers } = require('../controllers/userController');
const authorize = require('../middleware/auth');

router.post('/', authorize('admin'), createUser);
router.get('/', authorize('admin'), getUsers);

module.exports = router;