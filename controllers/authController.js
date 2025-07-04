const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const { updateUserData } = require('./dataController'); 

exports.register = async (req, res) => {
  const { name, email, password, githubId, soId } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).send('User already exists');

    const hashedPassword = await bcrypt.hash(password, 10);

    user = new User({ name, email, password: hashedPassword, githubId, soId });
    await user.save();

      // automatically log the user in generate token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.cookie('token', token, {
      httpOnly: true,
      secure: false, // production with HTTPS
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    });

     await updateUserData(user._id);

    res.redirect('/leaderboard');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send('Invalid credentials');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid credentials');

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.cookie('token', token, {
  httpOnly: true,
  secure: false, // production with HTTPS
  maxAge: 24 * 60 * 60 * 1000 // 1 day
});

    res.redirect('/leaderboard');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

exports.logout = (req, res) => {
  res.clearCookie('token');
  res.redirect('/login');
};
