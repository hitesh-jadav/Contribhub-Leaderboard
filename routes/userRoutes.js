const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const dataController = require('../controllers/dataController');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middlewares/auth');

// middleware to verify JWT & get current user
router.use((req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.redirect('/login');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.redirect('/login');
  }
});

// Leaderboard page
// router.get('/leaderboard', userController.getLeaderboard);
router.get('/leaderboard', authMiddleware, userController.getLeaderboard);

router.get('/profile', authMiddleware, userController.getProfile);

// Refresh current user's data
router.get('/refresh', userController.refreshAllUsersData); 

module.exports = router;
