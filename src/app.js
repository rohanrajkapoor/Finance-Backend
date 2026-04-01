const express = require('express');
const app = express();

app.use(express.json());

// Routes
const userRoutes = require('./routes/userRoutes');
const recordRoutes = require('./routes/recordRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

app.use('/users', userRoutes);
app.use('/records', recordRoutes);
app.use('/dashboard', dashboardRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});