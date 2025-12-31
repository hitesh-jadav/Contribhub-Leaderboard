

const GithubData = require('../models/GithubData');
const StackoverflowData = require('../models/StackoverflowData');
const User = require('../models/User'); 
const { fetchGithubData } = require('../utils/githubApi');
const { fetchStackOverflowData } = require('../utils/stackoverflowApi');

exports.updateUserData = async (userId) => {
  const user = await User.findById(userId);
  if (!user) return;

  const githubData = await fetchGithubData(user.githubId);
  if (githubData) {
    console.log("Saving GitHub data...");
    await GithubData.findOneAndUpdate(
      { userId },
      { ...githubData, userId },
      { upsert: true }
    );
  }

  const soData = await fetchStackOverflowData(user.soId);
  if (soData) {
    console.log("Saving StackOverflow data...");
    await StackoverflowData.findOneAndUpdate(
      { userId },
      { ...soData, userId },
      { upsert: true }
    );
  }
};

exports.updateAllUsersData = async () => {
  const users = await User.find({});
  for (const user of users) {
    try {
      await exports.updateUserData(user._id);
    } catch (err) {
      console.error(`Failed to update data for user ${user._id}:`, err);
    }
  }
};