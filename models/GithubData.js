const mongoose = require('mongoose');

const githubDataSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  username: String,
  followers: Number,
  following: Number,
  public_repos: Number,
  avatar_url: String,
  profile_url: String,
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('GithubData', githubDataSchema);
