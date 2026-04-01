const express = require('express');
const router = express.Router();

const { getSummaryData, getCategoryData } = require('../controllers/dashboardController');
const authorize = require('../middleware/auth');

router.get('/summary', authorize('admin', 'analyst'), getSummaryData);
router.get('/category', authorize('admin', 'analyst'), getCategoryData);

module.exports = router;