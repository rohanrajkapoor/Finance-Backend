const { records } = require('../data/store');

exports.createRecord = (req, res) => {
  const { amount, type, category, date } = req.body;

  if (!amount || !type) {
    return res.status(400).json({ message: "Amount and type required" });
  }

  const record = {
    id: records.length + 1,
    amount,
    type,
    category,
    date: date || new Date()
  };

  records.push(record);

  res.status(201).json({ success: true, data: record });
};

exports.getRecords = (req, res) => {
  res.json({ success: true, data: records });
};

exports.deleteRecord = (req, res) => {
  const id = parseInt(req.params.id);

  const index = records.findIndex(r => r.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Record not found" });
  }

  records.splice(index, 1);

  res.json({ success: true, message: "Deleted successfully" });
};