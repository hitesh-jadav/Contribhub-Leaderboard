const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// GET Req.
router.get('/login', (req, res) => res.render('login'));
router.get('/register', (req, res) => res.render('register'));

// POST Req.
router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

module.exports = router;
