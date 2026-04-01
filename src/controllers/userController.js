const { users } = require('../data/store');

exports.createUser = (req, res) => {
  const { name, email, role } = req.body;

  if (!name || !email || !role) {
    return res.status(400).json({ message: "All fields required" });
  }

  const user = {
    id: users.length + 1,
    name,
    email,
    role,
    isActive: true
  };

  users.push(user);

  res.status(201).json({ success: true, data: user });
};

exports.getUsers = (req, res) => {
  res.json({ success: true, data: users });
};