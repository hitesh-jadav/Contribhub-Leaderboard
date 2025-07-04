const User = require('../models/User');
const GithubData = require('../models/GithubData');
const StackoverflowData = require('../models/StackoverflowData');

exports.getLeaderboard = async (req, res) => {
  try {
    const allGithub = await GithubData.find().populate('userId');
    const allSO = await StackoverflowData.find().populate('userId');

    const leaderboard = allGithub.map(g => {
      const so = allSO.find(s => s.userId._id.toString() === g.userId._id.toString());
      return {
        user: g.userId,
        github: g,
        stackoverflow: so || {},
        score: (g.followers || 0) + (so?.reputation || 0)
      };
    });

    leaderboard.sort((a, b) => b.score - a.score);

    const userId = req.userId;

    res.render('leaderboard', {
      leaderboard: leaderboard.slice(0, 10), // ONLY top 10 profile
      currentUserId: userId
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error loading leaderboard');
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    const github = await GithubData.findOne({ userId: req.userId });
    const stackoverflow = await StackoverflowData.findOne({ userId: req.userId });

    res.render('profile', {
      user,
      github,
      stackoverflow
    });
  } catch (err) {
    console.error('Error loading profile:', err.message);
    res.status(500).send('Error loading profile');
  }
};


exports.refreshAllUsersData = async (req, res) => {
  const { updateAllUsersData } = require('./dataController');
  await updateAllUsersData(); // Refreshes all users
  res.redirect('/leaderboard'); // After update redirect to the leaderboard
};


exports.refreshUserData = async (req, res) => {
  const { updateUserData } = require('./dataController');
  await updateUserData(req.userId);
  res.redirect('/leaderboard');
};
