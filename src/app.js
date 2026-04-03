const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// ROOT ROUTE (THIS FIXES YOUR ERROR)
app.get('/', (req, res) => {
  res.send('Finance Backend Running 🚀');
});

// Routes
const userRoutes = require('./routes/userRoutes');
const recordRoutes = require('./routes/recordRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

app.use('/users', userRoutes);
app.use('/records', recordRoutes);
app.use('/dashboard', dashboardRoutes);

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});