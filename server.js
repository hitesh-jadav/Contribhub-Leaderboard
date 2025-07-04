const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

// Load environment variables
dotenv.config();

// Import routes and scheduler
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');
const startCronJob = require('./scheduler/cronJob');

// Initialize app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/', authRoutes);
app.use('/', userRoutes);

// Start cron job
startCronJob();

// Start server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
