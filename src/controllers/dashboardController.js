const { records } = require('../data/store');
const { getSummary, getCategoryWise } = require('../services/dashboardService');

exports.getSummaryData = (req, res) => {
  const data = getSummary(records);
  res.json({ success: true, data });
};

exports.getCategoryData = (req, res) => {
  const data = getCategoryWise(records);
  res.json({ success: true, data });
};