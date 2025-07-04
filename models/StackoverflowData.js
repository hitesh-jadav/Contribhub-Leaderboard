const mongoose = require('mongoose');

const soDataSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  display_name: String,
  reputation: Number,
  profile_image: String,
  link: String,
  badges: {
    bronze: Number,
    silver: Number,
    gold: Number
  },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('StackoverflowData', soDataSchema);
